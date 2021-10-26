from utils import connect_db

class RaffleStatsDAO:


    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        
    def get(self, raffle_stat_id):
        pass

    def add(self, data_tuple):
        pass

    def delete(self, raffle_stat_id):
        pass

    def edit(self, raffle_stat_id, new_data_tuple):
        pass


