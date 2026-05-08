import re


def generate_bot_reply(message):

    if not message:
        return (
            "I'm here with you. "
            "You can share whatever is on your mind."
        )

    msg = message.lower().strip()

    # Greetings
    if re.search(r"\b(hello|hi|hey|hii|heyy|hola)\b", msg):
        return (
            "Hello. I'm here to listen and support you. "
            "How are you feeling today?"
        )

    # Thanks
    elif re.search(r"\b(thank|thanks|thankyou|thx)\b", msg):
        return (
            "You're welcome. "
            "I'm glad you reached out."
        )

    # Stress
    elif re.search(r"\b(stress|stressed|pressure)\b", msg):
        return (
            "It sounds like you're carrying a lot mentally right now. "
            "Stress can become overwhelming when things pile up for too long. "
            "You don't need to solve everything immediately. "
            "Taking things one step at a time can sometimes reduce the pressure."
        )

    # Anxiety
    elif re.search(r"\b(anxiety|anxious|worried|nervous)\b", msg):
        return (
            "Anxiety can make even small situations feel overwhelming. "
            "Your mind may be thinking too far ahead right now. "
            "Try focusing on the present moment instead of every possible outcome. "
            "You are not alone in feeling this way."
        )

    # Overthinking
    elif re.search(r"\b(overthinking|overthink|thinking too much)\b", msg):
        return (
            "Overthinking can mentally exhaust you without you realizing it. "
            "Sometimes the mind keeps searching for answers even when there are none yet. "
            "It's okay to pause and give yourself some mental rest. "
            "Not every thought deserves your full attention."
        )

    # Depression
    elif re.search(r"\b(depression|depressed|sad|unhappy|down|empty)\b", msg):
        return (
            "I'm really sorry you're feeling this way. "
            "Emotional pain can feel very heavy when carried silently for too long. "
            "Please remember that difficult emotions do not make you weak. "
            "Your feelings deserve care and understanding."
        )

    # Loneliness
    elif re.search(r"\b(alone|lonely|isolated|ignored)\b", msg):
        return (
            "Feeling lonely can hurt deeply. "
            "Sometimes being emotionally disconnected feels heavier than being physically alone. "
            "Even when it feels like nobody understands you, your feelings still matter. "
            "You deserve support and connection."
        )

    # Relationships
    elif re.search(r"\b(relationship|relationships|love|partner|girlfriend|boyfriend)\b", msg):
        return (
            "Relationships can affect emotions in very powerful ways. "
            "When attachment and emotions become complicated, it can feel mentally exhausting. "
            "It's okay to feel confused or emotionally affected. "
            "Your emotions are valid."
        )

    # Breakup
    elif re.search(r"\b(breakup|break up|heartbreak|ex|move on)\b", msg):
        return (
            "Breakups can leave behind emotional pain and memories that are difficult to forget. "
            "Healing is not always fast, especially when someone meant a lot to you. "
            "Give yourself time instead of forcing yourself to feel okay immediately. "
            "Your heart is trying to recover."
        )

    # Placements
    elif re.search(r"\b(placement|placements|campus placement)\b", msg):
        return (
            "Placement pressure can become mentally exhausting. "
            "Seeing others succeed can sometimes create self-doubt and fear. "
            "One interview or one rejection does not define your future. "
            "Your journey will not look exactly like everyone else's."
        )

    # Career
    elif re.search(r"\b(job|career|future|interview|salary|rejected)\b", msg):
        return (
            "Career uncertainty can create a lot of emotional pressure. "
            "It's difficult when the future feels unclear or unstable. "
            "Please remember that setbacks and delays happen to many people. "
            "Your worth is bigger than professional success."
        )

    # Exams
    elif re.search(r"\b(exam|exams|study|studies|college|marks|assignment|fail)\b", msg):
        return (
            "Academic pressure can become emotionally draining. "
            "Constant expectations and comparisons can make studies feel overwhelming. "
            "Marks and results are only one small part of your life. "
            "They do not decide your value as a person."
        )

    # Family Pressure
    elif re.search(r"\b(family|parents|mom|dad|mother|father|home)\b", msg):
        return (
            "Family pressure can become emotionally difficult to handle. "
            "It hurts more when stress comes from the people closest to us. "
            "Wanting understanding from family is completely natural. "
            "Your emotions deserve to be heard too."
        )

    # Burnout
    elif re.search(r"\b(burnout|burned out|exhausted|tired|drained)\b", msg):
        return (
            "You sound emotionally and mentally exhausted. "
            "Burnout often happens when someone keeps carrying stress without enough rest. "
            "Your mind and body may be asking for a break. "
            "You don't need to keep proving your strength every moment."
        )

    # Confidence Issues
    elif re.search(r"\b(confidence|confident|insecure|self doubt|worthless|useless|failure)\b", msg):
        return (
            "Confidence issues can make you question yourself constantly. "
            "Difficult phases in life often affect the way we see ourselves. "
            "Please don't define your entire worth based on temporary struggles. "
            "You deserve kindness from yourself too."
        )

    # Money Stress
    elif re.search(r"\b(money|financial|finance|bills|debt|loan)\b", msg):
        return (
            "Financial stress can feel extremely overwhelming. "
            "Money problems often create fear, uncertainty, and emotional pressure. "
            "It's understandable to feel mentally tired because of it. "
            "You are carrying a lot right now."
        )

    # Social Pressure
    elif re.search(r"\b(social pressure|peer pressure|judgment|judgement|comparison)\b", msg):
        return (
            "Social pressure can become mentally exhausting. "
            "Constant comparison and fear of judgment can slowly affect confidence. "
            "You don't need to meet every expectation people place on you. "
            "Your life does not have to look like anyone else's."
        )

    # Panic Attacks
    elif re.search(r"\b(panic attack|panic attacks|panic|fear|scared|afraid|terrified)\b", msg):
        return (
            "Panic and fear can make everything around you feel overwhelming. "
            "Right now, focus only on the present moment instead of everything together. "
            "Try taking slow breaths and grounding yourself gently. "
            "You are safe in this moment."
        )

    # Crying
    elif re.search(r"\b(cry|crying|tears)\b", msg):
        return (
            "Crying is not weakness. "
            "Sometimes emotions become too heavy for the heart to carry quietly. "
            "Letting emotions out can be part of healing. "
            "You don't need to hide your feelings."
        )

    # Anger
    elif re.search(r"\b(angry|anger|mad|frustrated|irritated)\b", msg):
        return (
            "Anger often hides pain, disappointment, or emotional exhaustion underneath. "
            "Your emotions deserve understanding instead of suppression. "
            "It's okay to admit that things have been difficult lately. "
            "You are human."
        )

    # Sleep
    elif re.search(r"\b(sleep|insomnia|awake|night|can't sleep)\b", msg):
        return (
            "Lack of sleep often happens when the mind refuses to slow down. "
            "Stress and emotional pressure can make resting difficult. "
            "Your brain may still be carrying unresolved thoughts. "
            "Please try to be gentle with yourself."
        )

    # Motivation
    elif re.search(r"\b(motivation|lazy|hopeless|can't continue)\b", msg):
        return (
            "When the mind becomes emotionally tired, motivation naturally becomes harder. "
            "You don't need to fix your entire life overnight. "
            "Even small steps still count as progress. "
            "Please don't be too harsh on yourself."
        )
    
        # Solutions / Advice
    elif re.search(r"\b(solution|help me|how to overcome|what should i do|advice|fix this|cope)\b", msg):
        return (
            "You do not need to solve everything at once. "
            "Start with one small step instead of focusing on the entire problem. "
            "Try getting proper rest, talking to someone you trust, writing your thoughts down, "
            "and giving yourself small breaks from stress. "
            "Healing and improvement take time, and it's okay to move slowly."
        )
    
        # Professional Help
    elif re.search(r"\b(therapy|therapist|counseling|counselling|professional help|mental help|support)\b", msg):
        return (
            "Sometimes emotional struggles become too heavy to carry alone. "
            "Reaching out for professional support can help you understand and manage your feelings better. "
            "You can also connect with Serene Mind for emotional support, guidance, and a safe space to express yourself."
        )

    # Default
    else:
        return (
            "I hear you. "
            "What you're feeling matters, even if it's difficult to explain completely. "
            "You can talk freely here without fear of judgment. "
            "I'm listening."
        )