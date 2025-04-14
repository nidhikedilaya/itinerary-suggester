import requests
import json
import os

cities = ["Paris", "Tokyo", "New York", "Bangalore", "Berlin", "Singapore", "Rome", "Sydney", "Los Angeles"]
output_file = "weather_data.json"

def get_weather(city):
    url = f"https://wttr.in/{city}?format=j1"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            current = data["current_condition"][0]
            return {
                "temperature_C": current["temp_C"],
                "description": current["weatherDesc"][0]["value"]
            }
        else:
            return {"error": f"Failed to fetch weather for {city}"}
    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed for {city}: {e}"}

def save_to_file(city, data):
    try:
        if os.path.exists(output_file) and os.path.getsize(output_file) > 0:
            with open(output_file, "r") as f:
                all_data = json.load(f)
        else:
            all_data = {}

        all_data[city] = data

        with open(output_file, "w") as f:
            json.dump(all_data, f, indent=2)
    except Exception as e:
        print(f"Error saving data for {city}: {e}")

if __name__ == "__main__":
    for city in cities:
        weather_data = get_weather(city)
        if "error" in weather_data:
            print(weather_data["error"])
        else:
            save_to_file(city, weather_data)
            print(f"Saved weather data for {city}")
