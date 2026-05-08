from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

MYSQLHOST = os.getenv("MYSQLHOST")
MYSQLPORT = os.getenv("MYSQLPORT")
MYSQLUSER = os.getenv("MYSQLUSER")
MYSQLPASSWORD = os.getenv("MYSQLPASSWORD")
MYSQLDATABASE = os.getenv("MYSQLDATABASE")

DATABASE_URL = (
    f"mysql+pymysql://{MYSQLUSER}:{MYSQLPASSWORD}"
    f"@{MYSQLHOST}:{MYSQLPORT}/{MYSQLDATABASE}"
)

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()