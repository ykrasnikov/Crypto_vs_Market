#####################################################################
################### Import libraries
#####################################################################
from pymongo import MongoClient
from bson.json_util import dumps
import dns.resolver
from secrets import password
from secrets import user
import pandas as pd
import datetime as dt
# Flask
from flask import Flask,jsonify
# CORS making cross-origin AJAX possible
#from flask_cors import CORS
# database querry


#####################################################################
################### Flask setup
#####################################################################
app=Flask(__name__)
#CORS(app)

#####################################################################
################### setup home page with list of available routes
#####################################################################
@app.route('/')
def home_page():
     """home page for CryptoVsMarket project api"""
     print("homepage vizited")
     end_point1="/api/ep1/"
     end_point2="/api/ep2/"
     end_point3="/api/ep3/"
     end_point4="/api/ep4/"
     dateformat="yyyy-mm-dd"
     page_list =f'<h1>Welcome to CryptoVsMarket project api</h1>\
         <p><b>List of available routes:</b></p>\
         <p><b>all data </b> -  {end_point1} <br/></p>\
         <p><b>all data browse by date {dateformat}</b> - {end_point2}<i>"enter your date"{dateformat}</i> <br/></p>\
         <p><b>search by collection ( crypto,VIX,dollar,gold,S&P500 ) and date {dateformat}() </b> -  {end_point3} <i>"enter coolection (comma delimited) & enter your date"<br/></p>\
         <p><b> spare? </b> -  {end_point4} \
         <br/> {end_point2}<i>{dateformat} </i>  - from date or\
         <br/> {end_point2} "," {end_point3}<i>{dateformat}/{dateformat} </i> - from/to date</p>'
     return page_list

#####################################################################
################### setup end_point ep1 API route
#####################################################################
@app.route("/getids")
def end_point1():
     """returns all data"""
     app.logger.info('endpoint 1')
     print('end_point1 ')
     
     json_data=db_search()
     print(json_data)
     return json_data


#####################################################################
################### Database Connection 
#####################################################################
def db_search():
    print("DB_serach input")
    # Initialize PyMongo to work with MongoDBs
    conn = f'mongodb+srv://dbUser1:dbCrypto1@cluster0.yicgz.mongodb.net/Crypto_vs_Market?retryWrites=true&w=majority'
    client = MongoClient(conn) 
    #Define database and collection
    db=client.Crypto_vs_Market
    collection=db.crypto_history
    # search
    record=collection.find().limit(5)
    request_json=dumps(list(record))
    client.close()
    return request_json


if __name__ == '__main__':
    app.run(debug=True)

