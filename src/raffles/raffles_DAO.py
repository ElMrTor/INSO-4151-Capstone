from psycopg2 import connect
from utils import connect_db

class RaffleDAO:

    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        query = 'select * from public."Raffle"'
        cursor.execute(query)
        values = cursor.fetchall()
        cursor.close()
        self.connection.close()
        return values

    def get(self, raffle_id):
        cursor = self.connection.cursor()        
        get_query = 'select * from "Raffle" where raffle_id=%s'
        value = None                
        cursor.execute(get_query, (raffle_id, ))
        value = cursor.fetchone()            
        cursor.close()
        self.connection.close()
        return value

    def add(self, data_tuple):        
        cursor = self.connection.cursor()        
        query = 'insert into "Raffle"(name, photo, description, ticket_value, is_active, raffle_state, start_date, end_date, remaining_tickets, total_tickets) values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) returning raffle_id'
        cursor.execute(query, data_tuple)
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()
        if value and isinstance(value, tuple):
            return value[0]
        else:
            return None

    def delete(self, raffle_id):        
        cursor = self.connection.cursor()
        del_query = 'delete from "Raffle" where raffle_id=%s returning *'
        cursor.execute(del_query, (raffle_id, ))
        value = cursor.fetchone()
        self.connection.commit()
        if value and isinstance(value, tuple):
            return value
        else:
            return None

    def edit(self, raffle_id, new_data_tuple):
        cursor = self.connection.cursor()        
        new_raffle_data_query = new_data_tuple[:] + raffle_id
        update_query = 'update "Review" set review_score=%s, description=%s, is_deleted=%s where review_id=%s returning *'
        value = None                
        cursor.execute(update_query, (new_raffle_data_query))
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()        
        if value and isinstance(value, tuple):
            return value
        else:
            return None
