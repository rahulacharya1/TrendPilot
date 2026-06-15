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


def analyze_competitor(
    creator_name,
    niche
):

    prompt = f"""
    Analyze this creator.

    Creator Name: {creator_name}

    Niche: {niche}

    Find:
    - Content style
    - Viral strategy
    - Audience type
    - Content gaps
    - Untapped angles
    """

    response = model.generate_content(prompt)

    return response.text
