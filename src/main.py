from flask import Flask, jsonify, request, url_for, redirect, render_template

from reviews.reviews_manager import ReviewManager
from users.users_manager import UserManager
from raffle_stats.raffle_stats_manager import RaffleStatManager
from raffles.raffles_manager import RaffleManager
from utils import OK, BAD_REQUEST, NOT_FOUND, CREATED, GET, POST, PUT, DELETE

app = Flask(__name__)


def generic_error():
    return jsonify(Error='Incorrect request received.'), BAD_REQUEST

@app.route('/home', methods=[GET])
def home():
    return 'Not implemented'

@app.route('/users', methods=[GET])
def users():
    return UserManager().get_all()

@app.route('/user/register', methods=[POST])
def registerUser():
    return 'Not implemented'

@app.route('/login', methods=[POST])
def login():
    return 'Not implemented'


@app.route('/raffle_stats', methods=[GET, POST])
def raffle_stats():
    if request.method == GET:
        return RaffleStatManager().get_all()
    elif request.method == POST:
        return RaffleStatManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/raffle_stats/<int:raffle_stat_id>', methods=[GET, PUT, DELETE])
def raffle_stats_by_id(raffle_stat_id):
    if request.method == GET:
        return RaffleStatManager().get(raffle_stat_id)
    elif request.method == PUT:
        return RaffleStatManager().edit(raffle_stat_id, tuple(request.json.values()))
    elif request.method == DELETE:
        return RaffleStatManager().delete(raffle_stat_id)
    else:
        return generic_error()

@app.route('/raffles', methods=[GET, POST])
def raffles():
    if request.method == GET:
        return RaffleManager().get_all()
    elif request.method == POST:
        return RaffleManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/raffles/<int:id>', methods=[GET, PUT, DELETE])
def get_raffle_by_id(raffle_id):
    if request.method == GET:
        return RaffleManager().get(raffle_id)
    elif request.method == PUT:
        return RaffleManager().edit(raffle_id, tuple(request.json.values()))
    elif request.method == DELETE:
        return RaffleManager().delete(raffle_id)
    else:
        return generic_error()

@app.route('/reviews', methods=[GET, POST])
def reviews():
    if request.method == GET:
        return ReviewManager().get_all()
    elif request.method == POST:
        return ReviewManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/reviews/<int:review_id>', methods=[GET, PUT, DELETE])
def reviews_by_id(review_id):
    if request.method == GET:
        return ReviewManager().get(review_id)
    elif request.method == PUT:
        return ReviewManager().edit(review_id, tuple(request.json.values()))
    elif request.method == DELETE:
        return ReviewManager().delete(review_id)
    else:
        return generic_error()
    
if __name__ == "__main__":
    app.run(debug=True)