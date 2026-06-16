import json
from utils.gemini_client import model


def generate_hooks(topic):

    prompt = f"""
    Generate 5 viral hooks for this topic.
    Topic: {topic}

    You must return a valid JSON array of objects. Do not include markdown code block formatting (like ```json ... ```). Return ONLY the raw JSON content.
    Each object in the array must have two fields:
    - "type": one of ["Funny", "Emotional", "Curiosity", "Authority", "Storytelling"]
    - "content": the actual hook text
    """

    response = model.generate_content(prompt)
    text = response.text.strip()

    # Extract JSON array content between the first [ and the last ]
    start_idx = text.find('[')
    end_idx = text.rfind(']')
    if start_idx != -1 and end_idx != -1:
        text = text[start_idx:end_idx+1]

    try:
        return json.loads(text)
    except Exception as e:
        print("Failed to parse JSON from Gemini, falling back to raw parser:", e)
        # Fallback raw parser in case JSON is invalid
        lines = [line.strip() for line in text.split("\n") if line.strip()]
        fallback_hooks = []
        types = ["Curiosity", "Authority", "Storytelling", "Funny", "Emotional"]
        for idx, line in enumerate(lines[:5]):
            hook_type = types[idx % len(types)]
            # Clean list numbers/bullet points if present
            cleaned_line = line.lstrip("0123456789.-* ")
            fallback_hooks.append({
                "type": hook_type,
                "content": cleaned_line
            })
        return fallback_hooks

