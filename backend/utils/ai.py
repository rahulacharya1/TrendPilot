import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-1.5-flash"
)


def generate_hooks(topic):

    prompt = f"""
    Generate 5 viral hooks for this topic.

    Topic: {topic}

    Hook Types:
    1. Funny
    2. Emotional
    3. Curiosity
    4. Authority
    5. Storytelling
    """

    response = model.generate_content(prompt)

    return response.text

