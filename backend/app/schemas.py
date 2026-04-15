from pydantic import BaseModel

class EndSessionRequest(BaseModel):
    session_id: int

class ChatRequest(BaseModel):
    user_id: str
    message: str

class OrderRequest(BaseModel):
    professional_id: int

class StartSessionRequest(BaseModel):
    user_id: str
    professional_id: int