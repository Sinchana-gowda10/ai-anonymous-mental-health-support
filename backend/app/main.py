from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base, get_db
from app.models import User, ChatMessage, CommunityPost, CommunityReply, Professional, SessionModel
from app.schemas import ChatRequest, OrderRequest, StartSessionRequest, EndSessionRequest

import uuid
import os
import razorpay
import hmac
import hashlib
from datetime import datetime
from pydantic import BaseModel


# -------------------- APP INIT --------------------

app = FastAPI(title="AI Anonymous Support Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# -------------------- RAZORPAY SETUP --------------------

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

razorpay_client = razorpay.Client(
    auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)
)


# -------------------- SCHEMAS --------------------

class VerifyPaymentRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str


# -------------------- BASIC ROUTES --------------------

@app.get("/")
def home():
    return {"status": "Backend connected successfully"}


@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return {"users_count": len(users)}


# -------------------- USER --------------------

@app.post("/create-anonymous-user")
def create_anonymous_user(db: Session = Depends(get_db)):
    anonymous_id = f"anon_{uuid.uuid4().hex[:10]}"

    new_user = User(
        user_id=anonymous_id,
        role="user",
        status="active"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Anonymous user created",
        "user_id": anonymous_id
    }


# -------------------- CHAT --------------------

from app.chatbot import generate_bot_reply

@app.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):

    user_chat = ChatMessage(
        user_id=request.user_id,
        sender="user",
        message=request.message
    )
    db.add(user_chat)
    db.commit()

    bot_reply = generate_bot_reply(request.message)

    bot_chat = ChatMessage(
        user_id=request.user_id,
        sender="ai",
        message=bot_reply
    )
    db.add(bot_chat)
    db.commit()

    return {"bot_reply": bot_reply}


# -------------------- COMMUNITY --------------------

@app.post("/community/post")
def create_post(user_id: str, content: str, db: Session = Depends(get_db)):
    post = CommunityPost(user_id=user_id, content=content)
    db.add(post)
    db.commit()
    db.refresh(post)

    return {"message": "Post created", "post_id": post.post_id}


@app.get("/community/posts")
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(CommunityPost).order_by(CommunityPost.created_at.desc()).all()

    return [
        {
            "post_id": post.post_id,
            "content": post.content,
            "created_at": post.created_at
        }
        for post in posts
    ]


@app.post("/community/reply")
def reply_to_post(post_id: int, user_id: str, content: str, db: Session = Depends(get_db)):
    reply = CommunityReply(post_id=post_id, user_id=user_id, content=content)
    db.add(reply)
    db.commit()

    return {"message": "Reply added"}


# -------------------- PROFESSIONALS --------------------

@app.get("/professionals")
def get_professionals(db: Session = Depends(get_db)):
    return db.query(Professional).all()


# -------------------- PAYMENT --------------------

@app.post("/create-order")
def create_order(data: OrderRequest):

    try:
        amount = 50000  # ₹500

        order = razorpay_client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": 1
        })

        return {
            "order_id": order["id"],
            "amount": amount,
            "currency": "INR",
            "key": RAZORPAY_KEY_ID
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/verify-payment")
def verify_payment(data: VerifyPaymentRequest):

    generated_signature = hmac.new(
        bytes(RAZORPAY_KEY_SECRET, 'utf-8'),
        bytes(data.razorpay_order_id + "|" + data.razorpay_payment_id, 'utf-8'),
        hashlib.sha256
    ).hexdigest()

    if generated_signature == data.razorpay_signature:
        return {"status": "Payment verified"}

    else:
        raise HTTPException(status_code=400, detail="Invalid signature")


# -------------------- SESSION --------------------

@app.post("/start-session")
def start_session(data: StartSessionRequest, db: Session = Depends(get_db)):

    session = SessionModel(
        user_id=data.user_id,
        professional_id=data.professional_id,
        status="active",
        start_time=datetime.utcnow()
    )

    db.add(session)
    db.commit()
    db.refresh(session)

    return {
        "message": "Session started",
        "session_id": session.session_id
    }

@app.post("/end-session")
def end_session(data: EndSessionRequest, db: Session = Depends(get_db)):

    session = db.query(SessionModel).filter(
        SessionModel.session_id == data.session_id
    ).first()

    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    # Set end time
    session.end_time = datetime.utcnow()
    session.status = "ended"

    # Calculate duration (in minutes)
    duration = (session.end_time - session.start_time).total_seconds() / 60

    # Billing (₹50 per minute)
    cost = round(duration * 50, 2)

    db.commit()

    return {
        "message": "Session ended",
        "duration_minutes": round(duration, 2),
        "total_cost": cost
    }