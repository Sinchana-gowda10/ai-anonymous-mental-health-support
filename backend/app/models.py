from sqlalchemy import Column, String, TIMESTAMP, Integer,Text, ForeignKey
from datetime import datetime
from app.database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(String(50), primary_key=True)
    role = Column(String(20), default="user")
    status = Column(String(20), default="active")
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(50), ForeignKey("users.user_id"))
    sender = Column(String(10))  # user or ai
    message = Column(Text)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

class CommunityPost(Base):
    __tablename__ = "community_posts"

    post_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(50), ForeignKey("users.user_id"))
    content = Column(Text)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)


class CommunityReply(Base):
    __tablename__ = "community_replies"

    reply_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("community_posts.post_id"))
    user_id = Column(String(50), ForeignKey("users.user_id"))
    content = Column(Text)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)


