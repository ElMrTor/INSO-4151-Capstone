from flask import Flask, jsonify, request, url_for,redirect,render_template
app = Flask(__name__)


GET = 'GET'
POST = 'POST'
PUT = 'PUT'
DELETE = 'DELETE'

@app.route('/home', methods=[GET])
def home():
    return 'Not implemented'

@app.route('/users', methods=[GET])
def users():
    return 'Not implemented'

@app.route('/user/register', methods=[POST])
def registerUser():
    return 'Not implemented'

@app.route('/login', methods=[POST])
def login():
    return 'Not implemented'

@app.route('/raffles', methods=[GET, POST])
def raffles():
    if request.method == GET:
        return jsonify(Message='All raffles information')

@app.route('/raffles/<int:id>', methods=[GET, PUT, DELETE])
def get_raffle_by_id(id):
    return 'Not implemented'

@app.route('/raffles/stats', methods=[GET, POST])
def raffle_stats():
    return 'Not implemented'

@app.route('/raffles/stats/<int:raffle_id>', methods=[GET, PUT, DELETE])
def raffle_stats_by_id(raffle_id):
    return 'Not implemented'

@app.route('/reviews', methods=[GET, POST])
def reviews():
    return 'Not implemented'

@app.route('/reviews/<int:review_id>', methods=[GET, PUT, DELETE])
def reviews_by_id(review_id):
    return 'Not implemented'

from psycopg2 import connect

'Status Codes'
OK = 200
CREATED = 201
ACCEPTED = 202
NOT_FOUND = 404
BAD_REQUEST = 400

DATABASE_CONFIG = {
    'host' : 'localhost',
    'user' : 'postgres',
    'password' : 'inso',
    'database' : 'Capstone_Inso'
}

def connect_db() -> connect:
    try:
        connection = connect(**DATABASE_CONFIG)
    except Exception as e:
        print(f'Connection to the database failed with error {e}')
    return connection


if __name__ == "__main__":
    app.run()