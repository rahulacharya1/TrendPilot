import json
from utils.gemini_client import model


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

    # Extract JSON object content between the first { and the last }
    start_idx = text.find('{')
    end_idx = text.rfind('}')
    if start_idx != -1 and end_idx != -1:
        text = text[start_idx:end_idx+1]

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

