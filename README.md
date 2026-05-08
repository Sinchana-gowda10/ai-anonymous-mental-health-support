# SereneMind — Anonymous Mental Health Support Platform

SereneMind is a full-stack anonymous mental health support platform designed to provide a safe, private, and judgment-free environment for users seeking emotional support.

The platform enables users to:
- Chat anonymously with an AI emotional support assistant
- Participate in anonymous community discussions
- Connect with mental health professionals
- Start paid counselling sessions securely
- Maintain privacy without requiring personal identity information

---

# Project Objective

Mental health support is often inaccessible due to:
- Fear of judgment
- Social stigma
- Privacy concerns
- Lack of emotional safety

SereneMind aims to solve this problem by creating a privacy-first support platform where users can express themselves anonymously.

---

# Features

## Anonymous User System
- Generates unique anonymous user IDs
- No email, phone number, or real identity required
- Privacy-focused user flow

---

## AI Emotional Support Chatbot
- Rule-based NLP chatbot
- Emotion-aware conversational responses
- Handles:
  - Stress & anxiety
  - Depression & sadness
  - Relationship issues
  - Family pressure
  - Career stress
  - Academic pressure
  - Loneliness
  - Burnout
  - Motivation issues

---

## Community Support Module
- Anonymous community posts
- Community replies/discussions
- Peer emotional support system

---

## Professionals Module
- Browse mental health professionals
- Dynamic professional profiles
- Consultation session workflow

---

## Payment Integration
- Razorpay payment gateway integration
- Secure payment flow
- Session-based consultation payments

---

## Session Management
- Start/end counselling sessions
- Real-time session timer
- Dynamic session cost tracking
- Backend session persistence

---

# Tech Stack

## Frontend
- React.js
- Vite
- React Router
- Context API
- CSS3

---

## Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

---

## Database
- MySQL

---

## Payment Gateway
- Razorpay

---

# System Architecture

Frontend (React)
↓
FastAPI Backend
↓
MySQL Database

External Services:
- Razorpay Payment Gateway

---

# Current Functionalities

## Fully Working
- Frontend UI & navigation
- Anonymous authentication flow
- AI chatbot integration
- Community module
- Professionals module
- Razorpay payment flow
- Session management system
- Backend API integration
- MySQL database connectivity

---

# Future Improvements

- Advanced NLP / LLM integration
- Context-aware AI memory
- Anonymous recovery key system
- Multi-device anonymous login
- Real-time WebSocket chat
- Admin dashboard
- Deployment & scalability improvements
- JWT authentication
- Cloud database deployment

---

# Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
cd AI_Anonymous_Support
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Create virtual environment

```bash
python -m venv venv
```

## Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run FastAPI server

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Swagger API docs:

```text
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Database Setup

## Create MySQL Database

```sql
CREATE DATABASE anonymous_support;
```

Update database credentials inside:

```text
backend/app/database.py
```

---

# Environment Variables

Create `.env` file inside backend:

```env
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

---

# API Endpoints

## User APIs
- `POST /create-anonymous-user`

## Chat APIs
- `POST /chat`

## Community APIs
- `POST /community/post`
- `GET /community/posts`
- `POST /community/reply`

## Professional APIs
- `GET /professionals`

## Payment APIs
- `POST /create-order`
- `POST /verify-payment`

## Session APIs
- `POST /start-session`
- `POST /end-session`

---

# Screens Included

- Landing Page
- Anonymous Entry
- AI Support Chat
- Community Feed
- Professional Directory
- Payment Gateway
- Live Session Tracking

---

# Project Status

Current Status:
- Production-style full-stack working prototype

Pending Enhancements:
- AI model upgrade
- Deployment
- Anonymous account recovery system
- Production security improvements

---

# Learning Outcomes

This project helped in understanding:
- Full-stack application development
- REST API architecture
- FastAPI backend development
- React frontend architecture
- Database management
- Payment gateway integration
- Session lifecycle management
- Anonymous system design
- Mental health focused UX design

---

# Disclaimer

SereneMind is an academic project created for educational purposes.

This platform is not intended to replace licensed medical or psychological treatment.

Users experiencing severe mental health crises should contact professional healthcare providers or emergency services.

---

# Author

Developed by:
Sinchana

Full Stack Developer | Cybersecurity Enthusiast | AI-based Mental Health Platform Project

Change to my name and give me and my profile
