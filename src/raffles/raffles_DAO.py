from psycopg2 import connect
from utils import connect_db

class RaffleDAO:

    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        return None

    def get(self, raffle_id):
        return None

    def add(self, data_tuple):
        return None

    def delete(self, raffle_id):
        return None

    def edit(self, raffle_id, new_data_tuple):
        return None