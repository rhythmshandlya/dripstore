import imp
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

@app.route('/')
def home():
    return {'status': 'ml connected'}

if __name__ == "__main__":
    app.run(debug=True);