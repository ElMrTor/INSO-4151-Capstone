from raffle_stats.raffle_stats import RaffleStat
from raffle_stats.raffle_stats_DAO import RaffleStatsDAO
from utils import OK, ACCEPTED, BAD_REQUEST, CREATED, NOT_FOUND
from flask import jsonify

class RaffleStatManager:

    def get_all(self):                
        return jsonify(RaffleStat=[vars(RaffleStat(*rev)) for rev in RaffleStatsDAO().get_all()]), OK

    def get(self, raffle_stat_id):
        info = RaffleStatsDAO().get(raffle_stat_id)
        if info:
            return jsonify(vars(RaffleStat(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def delete(self, raffle_stat_id):
        info = RaffleStatsDAO().delete(raffle_stat_id)
        if info:
            return jsonify(DeletedRaffleStat=vars(RaffleStat(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def edit(self, raffle_stat_id, new_info):
        info = RaffleStatsDAO().edit(raffle_stat_id, new_info)
        if info:
            return jsonify(UpdatedRaffleStat=vars(RaffleStat(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def add(self, raffle_stat_info):
        info = RaffleStatsDAO().add(raffle_stat_info)
        if info:
            return jsonify(RaffleStat=info), CREATED
        else:
            return jsonify(Error='Failed to create RaffleStat'), BAD_REQUEST
