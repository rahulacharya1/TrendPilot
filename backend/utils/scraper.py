import requests
from bs4 import BeautifulSoup


def get_google_trends():

    url = "https://trends.google.com/trends/trendingsearches/daily"

    response = requests.get(url)

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    return soup.title.text

