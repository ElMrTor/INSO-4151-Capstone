from flask import Flask, jsonify, request, url_for,redirect,render_template

from reviews.reviews_manager import ReviewManager
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
    if request.method == GET:
        return ReviewManager().get_all()
    elif request.method == POST:
        return ReviewManager().add(tuple(request.json.values()))
    return 'Not implemented'

@app.route('/reviews/<int:review_id>', methods=[GET, PUT, DELETE])
def reviews_by_id(review_id):
    if request.method == GET:
        return ReviewManager().get(review_id)
    elif request.method == PUT:
        return ReviewManager().edit(review_id, tuple(request.json.values()))
    elif request.method == DELETE:
        return ReviewManager().delete(review_id)
    return 'Not implemented'
    
if __name__ == "__main__":
    app.run()