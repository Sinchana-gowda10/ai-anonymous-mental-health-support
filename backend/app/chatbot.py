def generate_bot_reply(user_message: str) -> str:
    message = user_message.lower()

    if "sad" in message or "depressed" in message:
        return "I’m really sorry you’re feeling this way. You’re not alone, and it’s okay to take things one step at a time."

    if "anxious" in message or "anxiety" in message:
        return "Anxiety can feel overwhelming. Try taking slow, deep breaths. I’m here with you."

    if "lonely" in message:
        return "Feeling lonely can be very hard. You matter, and reaching out like this is a good step."

    if "help" in message:
        return "I’m here to listen. Please tell me more about what you’re going through."

    return "Thank you for sharing. I’m here to support you. Please continue."
