from werkzeug.exceptions import BadRequest
from raffles.raffles import Raffle
from raffles.raffles_DAO import RaffleDAO
from utils import OK, ACCEPTED, BAD_REQUEST, CREATED, NOT_FOUND
from flask import jsonify

class RaffleManager:

    def get_all_json(self):
        return jsonify(Raffle=[vars(Raffle(*raffs)) for raffs in RaffleDAO().get_all()]), OK

    def get_all(self):
        return [vars(Raffle(*raffs)) for raffs in RaffleDAO().get_all()]

    def get(self, raffle_id):
        data = RaffleDAO().get(raffle_id)
        if data:
            return jsonify(Raffle=vars(Raffle(*data))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def delete(self, raffle_id):
        data = RaffleDAO().delete(raffle_id)
        if data:
            return jsonify(DeletedRaffle=vars(Raffle(*data))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND    

    def edit(self, raffle_id, new_data):
        data = RaffleDAO().edit(raffle_id, new_data)
        if data:
            return jsonify(UpdatedRaffle=vars(Raffle(*data))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def add(self, raffle_info):
        data = RaffleDAO().add(raffle_info)
        if data:
            return jsonify(RaffleIndex=data), CREATED
        else:
            return jsonify(Error='Failed to create Raffle'), BadRequest