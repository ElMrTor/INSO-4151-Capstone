from psycopg2 import connect

'Status Codes'
OK = 200
CREATED = 201
ACCEPTED = 202
NOT_FOUND = 404
BAD_REQUEST = 400

DATABASE_CONFIG = {
    'host' : 'localhost',
    'user' : 'postgres',
    'password' : 'inso',
    'database' : 'Capstone_Inso'
}

def connect_db() -> connect:
    try:
        connection = connect(**DATABASE_CONFIG)
    except Exception as e:
        print(f'Connection to the database failed with error {e}')
    return connection




