from utils import connect_db

class UserDAO:

    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        query = 'select * from "User"'
        cursor.execute(query)
        values = cursor.fetchall()
        cursor.close()
        self.connection.close()
        return values

    def get(self, user_id):
        cursor = self.connection.cursor()        
        get_query = 'select * from "User" where user_id=%s'
        value = None                
        cursor.execute(get_query, (user_id, ))
        value = cursor.fetchone()            
        cursor.close()
        self.connection.close()
        return value

    def add(self, value_tuple):
        cursor = self.connection.cursor()        
        query = 'insert into "User"(stat_id, photo, name, email, password, verified, total_raffle_participation, priviledges) values(%s, %s, %s, %s, %s, %s, %s, %s) returning user_id'
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
        del_query = 'delete from "User" where user_id=%s returning *'
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
        update_query = 'update "User" set review_score=%s, description=%s, is_deleted=%s where review_id=%s returning *'
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


    
