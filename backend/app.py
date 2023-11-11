import time
from flask import Flask, jsonify
import requests
API_NINJAS_KEY = "R81jW6DVPvXpNQViXsr7QQ==KVthtd2jriW2EP2u"
app = Flask(__name__)

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
    if response.status_code == 200:
        return jsonify(
        {
            "name": response["name"],
            "type": response["type"],
            "difficulty": response["difficulty"],
            "instructions": response["instructions"]
            }
        )
    else: 
        return jsonify(
            {
            "code": response.status_code
            }
            )
        # error message

