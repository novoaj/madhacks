import time
from flask import Flask, jsonify
import requests
import re
from bs4 import BeautifulSoup

API_NINJAS_KEY = "R81jW6DVPvXpNQViXsr7QQ==KVthtd2jriW2EP2u"
app = Flask(__name__)

"""
this method parses the text we get back from the API and returns a list of dictionaries
"""
def parse_html_response(response):
    soup = BeautifulSoup(response.text, "html.parser")
    plaintext = soup.get_text(strip=True)
    exercise_pattern = re.compile(r'"name": "(.*?)",\s*"type": "(.*?)",\s*"muscle": "(.*?)",\s*"equipment": "(.*?)",\s*"difficulty": "(.*?)",\s*"instructions": "(.*?)"')
    exercise_data = [
        {
            "name": match[0],
            "type": match[1],
            "muscle": match[2],
            "equipment": match[3],
            "difficulty": match[4],
            "instructions": match[5]
        }
        for match in exercise_pattern.findall(plaintext)
    ]
    return exercise_data

@app.route("/time", methods=["GET"])
def get_cur_time():
    return jsonify(
        {
            "time": 123
            }
        )
"""
this function is an api endpoint that the frontend can call in order to grab excercises from https://api-ninjas.com/api/exercises
should return a JSON object with exercises 
"""
@app.route("/get-exercises", methods=["GET"])
def get_exercises():
    muscle = "biceps" # allow user to specify on frontend?
    type_of_exercise = "cardio"
    url = "https://api-ninjas.com/api/exercises?type=cardio"
    response = requests.get(url, headers={'X-Api-Key': API_NINJAS_KEY})

    response.raise_for_status()
    if response.status_code == 200:
        data = parse_html_response(response)
        # parse the data in a different way
        print(type(data))
        return jsonify(
            data
        )
    else: 
        return jsonify(
            data[0]
            )
        # error message

