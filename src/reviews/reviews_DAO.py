from utils import connect_db


class ReviewDAO:

    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        query = 'select * from public."Review"'
        cursor.execute(query)
        values = cursor.fetchall()
        cursor.close()
        self.connection.close()
        return values

    
    def get(self, review_id):
        cursor = self.connection.cursor()        
        get_query = 'select * from "Review" where review_id=%s'
        value = None                
        cursor.execute(get_query, (review_id, ))
        value = cursor.fetchone()            
        cursor.close()
        self.connection.close()
        return value

    def add(self, value_tuple):
        cursor = self.connection.cursor()        
        query = 'insert into "Review"(review_score, description, is_deleted) values(%s, %s, %s) returning review_id'
        cursor.execute(query, value_tuple)
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()
        if value and isinstance(value, tuple):
            return value[0]
        else:
            return None

    def delete(self, review_id):
        cursor = self.connection.cursor()
        del_query = 'delete from "Review" where review_id=%s returning *'
        cursor.execute(del_query, (review_id, ))
        value = cursor.fetchone()
        self.connection.commit()
        if value and isinstance(value, tuple):
            return value
        else:
            return None

    def edit(self, review_id, new_value_tuple):
        cursor = self.connection.cursor()        
        update_query = 'update "Review" set review_score=%s, description=%s, is_deleted=%s where review_id=%s returning *'
        value = None                
        cursor.execute(update_query, (new_value_tuple[0], new_value_tuple[1], new_value_tuple[2], review_id))
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()        
        if value and isinstance(value, tuple):
            return value
        else:
            return None
        

