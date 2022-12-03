import os
import sys
import requests
from bs4 import BeautifulSoup

user = "gennady.korotkevich"
platform = "codechef"


if(platform == "gfg"):
    URL = f"https://auth.geeksforgeeks.org/user/{user}"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")
    text_html = soup.text

    search_string = "Overall Coding Score"
    i = text_html.find(search_string) + len(search_string) + 1
    overall_coding_score = text_html[i : i+10].split("\n")[0]

    print(overall_coding_score)

if(platform == "codechef"):
    URL = f"https://www.codechef.com/users/{user}"
    page = requests.get(URL)
    temp = "grep"

    soup = BeautifulSoup(page.content, "html.parser")
    text_html = soup.text
    # print(text_html)

    # output = os.popen("grep RatingProvisionalRating").read()
    # os.popen(" output $1")
    os.popen("command")
    output = os.popen(f"echo {text_html} | grep \"RatingProvisionalRating\"").read()
    print(output)

    search_string = "CodeChef Rating"
    i = text_html.find(search_string) + len(search_string) + 1
    overall_coding_score = text_html[i : i+10].split("\n")[0]

    print(overall_coding_score)


