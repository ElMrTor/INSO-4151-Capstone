from utils import connect_db
from psycopg2.sql import SQL, Identifier

class UserDAO:

    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        query = 'select * from "Capstone_Inso".public."User"'
        cursor.execute(query)
        values = cursor.fetchall()
        cursor.close()
        self.connection.close()
        return values

    def get_by_attribute(self, attr_name, attr_val):
        cursor = self.connection.cursor()        
        get_query = SQL('SELECT * FROM "Capstone_Inso".public."User" WHERE {}=%s').format(Identifier(attr_name))
        value = None
        cursor.execute(get_query, (attr_val, ))
        value = cursor.fetchone()
        cursor.close()
        self.connection.close()
        return value

    def get(self, user_id):
        return self.get_by_attribute('user_id', user_id)        
    
    def add(self, value_tuple):
        cursor = self.connection.cursor()        
        query = 'insert into "Capstone_Inso".public."User"(stat_id, photo, name, email, password, verified, total_raffle_participation, priviledges, username) values(%s, %s, %s, %s, %s, %s, %s, %s, %s) returning user_id'
        cursor.execute(query, value_tuple)
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()
        if value and isinstance(value, tuple):
            return value[0]
        else:
            return None


    def delete(self, user_id):
        cursor = self.connection.cursor()
        del_query = 'delete from "Capstone_Inso".public."User" where user_id=%s returning *'
        cursor.execute(del_query, (user_id, ))
        value = cursor.fetchone()
        self.connection.commit()
        if value and isinstance(value, tuple):
            return value
        else:
            return None

    def edit(self, user_id, new_value_tuple):
        cursor = self.connection.cursor()        
        new_data_query_values = new_value_tuple[:] + [user_id]
        update_query = 'update "Capstone_Inso".public."User" set review_score=%s, description=%s, is_deleted=%s where review_id=%s returning *'
        value = None                
        cursor.execute(update_query, (new_data_query_values))
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()        
        if value and isinstance(value, tuple):
            return value
        else:
            return None


    
