#####################################################################
################### Import libraries
#####################################################################
import datetime as dt

# database querry
from pymongo import MongoClient
from bson.json_util import dumps
import dns.resolver
#from bson.json_util import dumps
from secrets import password
from secrets import user

#####################################################################
################### Database Connection 
#####################################################################
def db_search(date,currency):
    print("DB_serach input",date,currency)
    # Initialize PyMongo to work with MongoDBs
    conn = f'mongodb+srv://{user}:{password}@cluster0.yicgz.mongodb.net/Crypto_vs_Market?retryWrites=true&w=majority'
    client = MongoClient(conn) 
    #Define database and collection
    db=client.Crypto_vs_Market
    collection=db.crypto_history
    record=collection.find()
    print('db_search ', list(record))
    request_json=json.dumps(list(record))
    #request_json={"l":"990"}

    client.close()
    return request_json