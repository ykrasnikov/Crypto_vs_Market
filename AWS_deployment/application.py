#####################################################################
################### Import libraries
#####################################################################
from calendar import formatstring
from flask.templating import render_template
from pymongo import MongoClient
from bson.json_util import dumps
import dns.resolver
import pandas as pd
from datetime import date, datetime
# Flask
from flask import Flask,jsonify, request
# CORS making cross-origin AJAX possible
from flask_cors import CORS
# database querry


#####################################################################
################### Flask setup
#####################################################################
application=app=Flask(__name__)
CORS(app)

#####################################################################
################### setup home page - render HTML
#####################################################################
@app.route('/')
def index():
     """home page for CryptoVsMarket project"""
     
     return render_template('index.html')

#####################################################################
################### setup page with available routes
#####################################################################
@app.route('/api/')
def home_page():
     """home page for CryptoVsMarket project api"""
     print("homepage vizited")
     end_point1="/api/all_data/"
     end_point2="/api/crypto/Symbol,Symbol,.../mm-dd-yyyy,mm-dd-yyyy"
     end_point3="/api/dollar/"
     end_point4="/api/snp500/"
     end_point5="/api/vix/"
     end_point6="/api/gold/"
    #  dateformat="yyyy-mm-dd"
     page_list =f'<h1>Welcome to CryptoVsMarket project API</h1>\
         <p><b>List of available routes:</b></p>\
         <p><b>all data </b>            -  {end_point1} <br/></p>\
         <p><b>Crypto all data  </b>    -  {end_point2} <br/></p>\
         <p><b>Dollar all data  </b>    -  {end_point3} <br/></p>\
         <p><b>S&P500 all data  </b>    -  {end_point4} <br/></p>\
         <p><b>VIX all data  </b>       -  {end_point5} <br/></p>\
         <p><b>Gold all data  </b>      -  {end_point6} <br/></p>'
     return page_list

#####################################################################
################### setup end_point ep1 API route
#####################################################################
@app.route("/api/all_data/")
def end_point1():
     """returns all data"""
     try:
          print('visited end_point1 ')
     
          collection_name='all_data'
          json_data=db_search(collection_name)
          #print(json_data)
     except Exception as e:
          # handling error
          error=f"_exception_: {type(e).__name__},</br> _arguments_: {e.args}"
          print(error)
          error_json={"error":error}
          json_data=jsonify(error_json)
     return json_data

#####################################################################
################### setup end_point ep2 API route
#####################################################################
@app.route("/api/crypto/<type>/<date>")
def end_point2(type,date):
     """returns all Crypto data"""
     print('visited end_point2 ', type, date)
     # date format mm/dd/yyyy
     try:
          date_format='%m-%d-%Y'
          collection_name='crypto_history'
          crypto_type=['BTC','ETH','LTC']
          crypto_types=type.split(',')
          crypto_dates=date.split(',')
          for i in range(len(crypto_dates)):
               print('entry date',crypto_dates[i])
               # work on string
               # 
               # convert string to datetime object
               date_obj=datetime.strptime(crypto_dates[i],date_format) 
               # crypto_dates[i]=datetime.timestamp(date_obj)*1000
               crypto_dates[i]=date_obj
               print ('timestamp',date)
          json_data=crypto_search(collection_name,crypto_types,crypto_dates )
          #print(json_data)
     except Exception as e:
       # handling error
          error=f"_exception_: {type(e).__name__},</br> _arguments_: {e.args}"
          print(error)
          error_json={"error":error}
          json_data=jsonify(error_json)
     return json_data

#####################################################################
################### setup end_point ep3 API route
#####################################################################
@app.route("/api/dollar/")
def end_point3():
     """returns all dollar data"""
     print('visited end_point3 ')
     collection_name='Dollar'
     json_data=db_search(collection_name)
     #print(json_data)
     return json_data

#####################################################################
################### setup end_point ep4 API route
#####################################################################
@app.route("/api/snp500/")
def end_point4():
     """returns all dollar data"""
     print('visited end_point4 ')
     collection_name='SnP'
     json_data=db_search(collection_name)
     #print(json_data)
     return json_data

#####################################################################
################### setup end_point ep5 API route
#####################################################################
@app.route("/api/vix/")
def end_point5():
     """returns all VIX data"""
     print('visited end_point5 ')
     collection_name='VIX'
     json_data=db_search(collection_name)
     #print(json_data)
     return json_data

#####################################################################
################### setup end_point ep6 API route
#####################################################################
@app.route("/api/gold/")
def end_point6():
     """returns all Gold data"""
     print('visited end_point6 ')
     collection_name='Gold'
     json_data=db_search(collection_name)
     #print(json_data)
     return json_data

#####################################################################
################### setup THE MONSTER end_point API route taking JSON as input
#####################################################################
@app.route("/api/payload/",methods=['POST'])
def get_post_json():
     """returns all data based on input Payload"""
     print('visited end_point6 ')
     payload_json=request.json
     print(payload_json)
#     payload={
#           'collection':{'collection1':['ticker1','ticker2'],
#                         'collection2':['ticker3','ticker4']},
#           'start_date':'date1',
#           'stop_date':'date2',
#           'data_type':['Name',
#                          'Symbol',
#                          'Date',
#                          'High',
#                          'Low',
#                          'Open',
#                          'Close',
#                          'Volume',
#                          'Marketcap']
#      }
     return payload_json

#####################################################################
################### Database Connection 
#####################################################################
def db_search(collection_name):
    """query mongo Atlas DB"""
    print("visit DB_serach input", collection_name)
    # Initialize PyMongo to work with MongoDBs
    password='dbCrypto1'
    user='dbUser1'
    conn = f'mongodb+srv://{user}:{password}@cluster0.yicgz.mongodb.net/Crypto_vs_Market?retryWrites=true&w=majority'
    client = MongoClient(conn) 
    #Define database and collection
    db=client.Crypto_vs_Market
    collection=db[collection_name]
    # search
    record=collection.find()

    client.close()
    request_json=dumps(list(record))
    # request_json=jsonify({"data1":"value1","data2":"value2"})

    return request_json

#####################################################################
################### Database Connection 
#####################################################################
def crypto_search(collection_name,crypto_types,crypto_dates):
     """query mongo Atlas DB"""
     try:
          print("visit crypto_serach input", collection_name, crypto_types,crypto_dates)
          # Initialize PyMongo to work with MongoDBs
          password='dbCrypto1'
          user='dbUser1'
          conn = f'mongodb+srv://{user}:{password}@cluster0.yicgz.mongodb.net/Crypto_vs_Market?retryWrites=true&w=majority'
          client = MongoClient(conn) 
          #Define database and collection
          db=client.Crypto_vs_Market
          collection=db[collection_name]
          # search
          record = collection.find({'$and':[\
                    {'Date':{"$gte":crypto_dates[0]}},\
                    {'Date':{"$lte":crypto_dates[1]}},\
                    {"Symbol": {"$in":crypto_types}}\
                    ]})
          client.close()
          request_json=dumps(list(record))
          # request_json=jsonify({"data1":"value1","data2":"value2"})  
     except Exception as e:
       # handling error
          error=f"_exception_: {type(e).__name__},</br> _arguments_: {e.args}"
          print(error)
          error_json={"error":error}
          request_json=jsonify(error_json)
     return request_json


if __name__ == '__main__':
    app.run(debug=True)



