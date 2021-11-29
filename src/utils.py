from psycopg2 import connect

'Rest Methods'
GET = 'GET'
POST = 'POST'
PUT = 'PUT'
DELETE = 'DELETE'

'Status Codes'
OK = 200
CREATED = 201
ACCEPTED = 202
NOT_FOUND = 404
BAD_REQUEST = 400
NOT_ACCEPTABLE = 406
SERVICE_UNAVAILABLE = 503

DATABASE_CONFIG = {
    'host' : 'localhost',
    'user' : 'postgres',
    'password' : 'inso',
    'database' : 'Capstone_Inso'
}

def connect_db():
    global DATABASE_CONFIG
    try:
        try:
            connection = connect(**DATABASE_CONFIG)
        except:            
            DATABASE_CONFIG['database'] = 'capstone_inso'
            connection = connect(**DATABASE_CONFIG)
    except Exception as e:
        print(f'Connection to the database failed with error {e}')
    return connection




