from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.database import engine, SessionLocal, Base
from app.models import User
import uuid
from app.chatbot import generate_bot_reply
from app.models import ChatMessage, CommunityPost, CommunityReply
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import ChatRequest



app = FastAPI(title="AI Anonymous Support Platform")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"status": "Backend connected to MySQL successfully"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return {"users_count": len(users)}

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
        "message": "Anonymous user created successfully",
        "user_id": anonymous_id
    }
@app.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):
    # Save user message
    user_chat = ChatMessage(
        user_id=request.user_id,
        sender="user",
        message=request.message
    )
    db.add(user_chat)
    db.commit()

    # Generate bot reply
    bot_reply = generate_bot_reply(request.message)

    # Save bot reply
    bot_chat = ChatMessage(
        user_id=request.user_id,
        sender="ai",
        message=bot_reply
    )
    db.add(bot_chat)
    db.commit()

    return {
        "bot_reply": bot_reply
    }
@app.post("/community/post")
def create_post(user_id: str, content: str, db: Session = Depends(get_db)):
    post = CommunityPost(
        user_id=user_id,
        content=content
    )
    db.add(post)
    db.commit()
    db.refresh(post)

    return {
        "message": "Post created successfully",
        "post_id": post.post_id
    }

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
    reply = CommunityReply(
        post_id=post_id,
        user_id=user_id,
        content=content
    )
    db.add(reply)
    db.commit()

    return {"message": "Reply added successfully"}



