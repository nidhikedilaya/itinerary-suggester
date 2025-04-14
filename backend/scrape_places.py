import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEOAPIFY_API_KEY")

CITIES = ["Paris", "Tokyo", "New York", "Bangalore", "Berlin", "Singapore", "Rome", "Sydney", "Los Angeles"]
OUTPUT_FILE = "places_data.json"

def get_city_coords(city):
    url = f"https://api.geoapify.com/v1/geocode/search?text={city}&apiKey={API_KEY}"
    try:
        res = requests.get(url).json()
        if res.get("features"):
            coords = res["features"][0]["geometry"]["coordinates"]
            return coords[1], coords[0]  # lat, lon
        else:
            print(f"Error: No coordinates found for {city}")
            return None, None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching coordinates for {city}: {e}")
        return None, None

def get_places(lat, lon):
    url = f"https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:{lon},{lat},5000&limit=10&apiKey={API_KEY}"
    try:
        res = requests.get(url).json()
        return res.get("features", [])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching places data: {e}")
        return []

all_data = {}

for city in CITIES:
    lat, lon = get_city_coords(city)
    if lat and lon:
        print(f"Fetching places for {city}")
        features = get_places(lat, lon)
        all_data[city] = [place["properties"]["name"] for place in features if "name" in place["properties"]]
    else:
        all_data[city] = []

try:
    with open(OUTPUT_FILE, "w") as f:
        json.dump(all_data, f, indent=2)
    print(f"Saved place data to {OUTPUT_FILE}")
except Exception as e:
    print(f"Error saving place data: {e}")
