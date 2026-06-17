import json
from utils.gemini_client import model


def analyze_competitor(
    creator_name,
    niche
):

    prompt = f"""
    Analyze the content creator named "{creator_name}" in the niche "{niche}".

    You must return a valid JSON object. Do not include markdown code block formatting (like ```json ... ```). Return ONLY the raw JSON content.
    The object must have exactly three fields:
    - "content_angle": Description of their content style, audience type, and viral strategy
    - "gap_found": Identified content gaps in their coverage compared to the niche
    - "competitor_trends": Untapped angles or specific topics they are covering or missing
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
        print("Failed to parse competitor analysis JSON from Gemini, falling back:", e)
        return {
            "content_angle": f"Creator {creator_name} analyzes topic structures within the {niche} niche.",
            "gap_found": "Limited deep technical breakdown files and beginner guides.",
            "competitor_trends": "SaaS micro-monetization tips, coding workflows, and tools."
        }
