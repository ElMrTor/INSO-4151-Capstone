from flask import Flask, jsonify, request, url_for, redirect, render_template

from reviews.reviews_manager import ReviewManager
from users.users_manager import UserManager
from raffle_stats.raffle_stats_manager import RaffleStatManager
from raffles.raffles_manager import RaffleManager
from utils import OK, BAD_REQUEST, NOT_FOUND, CREATED, GET, POST, PUT, DELETE
import paypalrestsdk

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

paypalrestsdk.configure({
  "mode": "sandbox", # sandbox or live
  "client_id": "AQ1jJBdKSdb71eUxM0SecJPI2iYxlyzRTir9poOfUYqy9y4524DnAc49pkcKrHIx2N6MBXshRU4iu8kq",
  "client_secret": "EJjnn70mGc8KlDMcfqc7G11IxYoZUwWK6R9lZTFyhxqr8G3aG2X4phVSr1lGkrLNA53GKt_HCAv6givG" })

@app.route('/paypal')
def index():
    return render_template("index.html")

@app.route('/payment', methods=['POST'])
def payment():

    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"},
        "redirect_urls": {
            "return_url": "http://localhost:3000/payment/execute",
            "cancel_url": "http://localhost:3000/"},
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "testitem",
                    "sku": "12345",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1}]},
            "amount": {
                "total": "1.00",
                "currency": "USD"},
            "description": "This is the payment transaction description."}]})

    if payment.create():
        print('Payment success!')
    else:
        print(payment.error)

    return jsonify({'paymentID' : payment.id})

@app.route('/execute', methods=['POST'])
def execute():
    success = False

    payment = paypalrestsdk.Payment.find(request.form['paymentID'])

    if payment.execute({'payer_id' : request.form['payerID']}):
        print('Execute success!')
        success = True
    else:
        print(payment.error)

    return jsonify({'success' : success})
    
if __name__ == "__main__":
    app.run(debug=True)