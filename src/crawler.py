import requests
from bs4 import BeautifulSoup

user = "siddhant315yadav"
URL = f"https://auth.geeksforgeeks.org/user/{user}"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
text_html = soup.text

search_string = "Overall Coding Score"
i = text_html.find(search_string) + len(search_string) + 1
overall_coding_score = text_html[i : i+10].split("\n")[0]