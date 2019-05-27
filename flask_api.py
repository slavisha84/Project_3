# import dependencies
import pandas as pd
import sqlite3
from datetime import datetime, timedelta
from fbprophet import Prophet
from fbprophet.plot import plot_plotly
import plotly.offline as py
import plotly.graph_objs as go
from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)

def getData():
    # Create your connections with indoor and outdoor databases
    Ocnx = sqlite3.connect('Outdoor.db')
    Icnx = sqlite3.connect('Indoor.db')
    Outdoor_df = pd.read_sql_query("SELECT * FROM BME_DATA", Ocnx)
    Indoor_df = pd.read_sql_query("SELECT * FROM BME_DATA", Icnx)

    # Convert time into datetime
    Outdoor_df['TIME_STAMP'] = pd.to_datetime(Outdoor_df['TIME_STAMP'])
    Indoor_df['TIME_STAMP'] = pd.to_datetime(Indoor_df['TIME_STAMP'])
    Outdoor_df['TIME_STAMP'] = Outdoor_df['TIME_STAMP'].dt.round('60min')
    Indoor_df['TIME_STAMP'] = Indoor_df['TIME_STAMP'].dt.round('1min')

    # Deleting the wrong input at the first rows
    Outdoor_df = Outdoor_df.iloc[1:]
    Indoor_df = Indoor_df.iloc[1:]

    # converting temperature from C to f
    Outdoor_df['TEMPERATURE'] = round((Outdoor_df['TEMPERATURE']* 9/5) + 32)
    Indoor_df['TEMPERATURE'] = round((Indoor_df['TEMPERATURE']* 9/5) + 32)

    # Merging Indor and Outdoor (on time stamp)
    master_df = pd.merge(Outdoor_df, Indoor_df, on = "TIME_STAMP", how = "left", suffixes=("_Out","_In"))
    master_df = master_df.dropna()
    return master_df

@app.route('/', methods=['POST'])
def get_tasks():
    return jsonify(master_df)

if __name__ == '__main__':
    app.run(debug=True)