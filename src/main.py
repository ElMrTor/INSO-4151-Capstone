from flask import Flask, jsonify, request, url_for, redirect, send_file
from flask.helpers import flash
from flask.wrappers import Response
from flask_login import login_manager, login_required, login_user, logout_user, current_user


from reviews.reviews_manager import ReviewManager
from users.users import User
from users.users_DAO import UserDAO
from users.users_manager import UserManager
from raffle_stats.raffle_stats_manager import RaffleStatManager
from raffles.raffles_manager import RaffleManager
from utils import NOT_ACCEPTABLE, OK, BAD_REQUEST, NOT_FOUND, CREATED, GET, POST, PUT, DELETE


app = Flask(__name__)
app.config.update(DEBUG=True)
login_manager = login_manager.LoginManager()
app.secret_key = '2a8af9e0568b6a0ab3ae31a28cbea1208ec1a91bb5ded3cc2d535f9b861f7593'
login_manager.init_app(app)
login_manager.login_view = 'login'

def generic_error():
    return jsonify(Error='Incorrect request received.'), BAD_REQUEST

@login_manager.user_loader
def load_user(user_id):
    data = UserDAO().get(user_id)   
    if data:
        return User(*data)
    else:
        return None

@app.route('/home', methods=[GET])
@login_required
def home():    
    return Response(f'Logged in as {current_user.username}')

@app.route('/users', methods=[GET])
def users():
    return UserManager().get_all()

@app.route('/users/<int:user_id>', methods=[GET])
@login_required
def get_user(user_id):
    return UserManager().get(user_id)

@app.route('/user/register', methods=[POST])
def registerUser():
    return UserManager().register_user(request.json)

@app.route('/login', methods=[POST, GET])
def login():
    if request.method == POST:                
        user_n = request.form['username']
        user_p = request.form['password']
        user = UserManager().validate_user(user_n, user_p)
        if user:            
            if current_user.is_authenticated:
                return Response('User already logged in.')
            login_user(user)                      
            flash(f'Logged in successfully.')            
            return redirect(request.args.get('next') or url_for('home'))                    
        else:
            flash('Could not log in.')
            return 'Could not log in.', NOT_ACCEPTABLE
    elif request.method == GET:              
        return Response('User needs to be logged in before performing that action.')

@app.route('/logout', methods=[GET])
def logout():    
    logout_user()
    return Response('User logged out.')


@app.route('/raffle_stats', methods=[GET, POST])
@login_required
def raffle_stats():
    if request.method == GET:
        return RaffleStatManager().get_all()
    elif request.method == POST:
        return RaffleStatManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/raffle_stats/<int:raffle_stat_id>', methods=[GET, PUT, DELETE])
@login_required
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
@login_required
def raffles():
    if request.method == GET:
        return RaffleManager().get_all()
    elif request.method == POST:
        return RaffleManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/raffles/<int:id>', methods=[GET, PUT, DELETE])
@login_required
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
@login_required
def reviews():
    if request.method == GET:
        return ReviewManager().get_all()
    elif request.method == POST:
        return ReviewManager().add(tuple(request.json.values()))
    else:
        return generic_error()

@app.route('/reviews/<int:review_id>', methods=[GET, PUT, DELETE])
@login_required
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