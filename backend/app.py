from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

def load_json(file):
    """Load data from a JSON file, return empty dictionary on error."""
    try:
        if os.path.exists(file):
            with open(file, 'r') as f:
                return json.load(f)
        else:
            return {}
    except Exception as e:
        print(f"Error loading {file}: {e}")
        return {}

@app.route('/data/<city>')
def get_data(city):
    hotels = load_json('hotels_data.json').get(city, [])
    places = load_json('places_data.json').get(city, [])
    weather = load_json('weather_data.json').get(city, {})

    if not hotels and not places and not weather:
        return jsonify({"error": f"No data found for {city}"}), 404

    return jsonify({
        'hotels': hotels,
        'places': places,
        'weather': weather
    })

if __name__ == '__main__':
    app.run(debug=True)
