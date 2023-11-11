import time
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/time", methods=["GET"])
def get_cur_time():
    return jsonify(
        {
            "time": 123
            }
        )
