import google.generativeai as genai
import os
import json
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
    Create a complete short reel content for this topic.
    Topic: {topic}

    You must return a valid JSON object. Do not include markdown code block formatting (like ```json ... ```). Return ONLY the raw JSON content.
    The object must have exactly four fields:
    - "script": a complete 30 second script with visual cues, e.g., "[VISUAL: Screen recording...]"
    - "caption": a catchy, viral caption
    - "hashtags": 3-5 trending hashtags, space separated e.g. "#growth #coding"
    - "cta": a strong call to action
    """

    response = model.generate_content(prompt)
    text = response.text.strip()

    # Strip markdown block if it exists
    if text.startswith("```json"):
        text = text[7:]
    elif text.startswith("```"):
        text = text[3:]
    if text.endswith("```"):
        text = text[:-3]
    text = text.strip()

    try:
        return json.loads(text)
    except Exception as e:
        print("Failed to parse JSON from Gemini, falling back to raw parser:", e)
        # Fallback in case JSON is invalid
        return {
            "script": text,
            "caption": f"Trending topic: {topic}",
            "hashtags": "#coding #trendpilot",
            "cta": "Follow for more!"
        }

