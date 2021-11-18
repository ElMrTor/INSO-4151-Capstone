from utils import connect_db

class RaffleStatsDAO:


    def __init__(self) -> None:
        self.connection = connect_db()

    def get_all(self):
        cursor = self.connection.cursor()
        query = 'select * from public.RaffleStats'
        cursor.execute(query)
        values = cursor.fetchall()
        cursor.close()
        self.connection.close()
        return values
        
    def get(self, raffle_stat_id):
        cursor = self.connection.cursor()
        get_query = 'select * from "RaffleStats" where stat_id=%s'        
        cursor.execute(get_query, (raffle_stat_id, ))
        value = cursor.fetchone()
        cursor.close()
        self.connection.close()
        return value


    def add(self, data_tuple):
        cursor = self.connection.cursor()
        query = 'insert into "RaffleStat"(earnings, visitors, completedR_count, in_progressR_count, cancelR_count, total_raffles, avg_earnings, score) values(%s, %s, %s, %s, %s, %s, %s, %s) returning stat_id'
        cursor.execute(query, data_tuple)
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.connection.close()
        if value and isinstance(value, tuple):
            return value[0]
        else:
            return None

    def delete(self, raffle_stat_id):
        cursor = self.connection.cursor()
        del_query = 'delete from "RaffleStat" where stat_id=%s returning *'
        cursor.execute(del_query, (raffle_stat_id, ))
        value = cursor.fetchone()
        if value and isinstance(value, tuple):
            return value
        else:
            return None

    def edit(self, raffle_stat_id, new_data_tuple):
        cursor = self.connection.cursor()
        new_value_tuple = new_data_tuple[:] + [raffle_stat_id]
        update_query = 'update "RaffleStat" set earnings=%s, visitors=%s, completedR_count=%s, in_progressR_count=%s, cancelR_count=%s, total_raffles=%s, avg_earnings=%s, score=%s where stat_id=%s returning *'
        cursor.execute(update_query, new_value_tuple)
        value = cursor.fetchone()
        self.connection.commit()
        cursor.close()
        self.cconnection.close()
        if value and isinstance(value, tuple):
            return value
        else:
            return None


