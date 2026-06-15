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


def generate_script(topic):

    prompt = f"""
    Create a complete short reel content.

    Topic: {topic}

    Include:
    - Hook
    - 30 second script
    - CTA
    - Caption
    - Viral hashtags
    """

    response = model.generate_content(prompt)

    return response.text

