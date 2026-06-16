from utils.gemini_client import model


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
