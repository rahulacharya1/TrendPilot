def calculate_trend_score(
    views,
    engagement,
    competition
):

    score = (
        (views * 0.5)
        +
        (engagement * 0.3)
        -
        (competition * 0.2)
    )

    return round(score)

