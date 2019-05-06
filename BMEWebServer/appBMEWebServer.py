from flask import Flask, render_template, request
app = Flask(__name__)
import sqlite3
# Retrieve data from database
def getData():
    conn=sqlite3.connect('../Sensors.db')
    curs=conn.cursor()
    for row in curs.execute("SELECT * FROM BME_DATA ORDER BY TIME_STAMP DESC LIMIT 1"):
        Time = str(row[1])
        Temperature = row[2]
        Gas = row[3]
        Humidity = row[4]
        Pressure = row[5]
        Altitude = row[6]
        
    conn.close()
    return Time, Temperature, Gas, Humidity, Pressure, Altitude
# main route 
@app.route("/")
def index():    
    Time, Temperature, Gas, Humidity, Pressure, Altitude = getData()
    templateData ={'Time': Time,
        'Temperature': Temperature,
        'Gas': Gas,
        'Humidity': Humidity,
        'Pressure': Pressure,
        'Altitude': Altitude}
    return render_template('index.html', **templateData)
if __name__ == "__main__":
   app.run(debug=False)