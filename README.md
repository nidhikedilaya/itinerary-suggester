# 🧳 Itinerary Suggester

A full-stack travel itinerary suggester built with **Flask** and **Vanilla JavaScript**. Select a city and instantly view hotel options, popular places to visit, and the current weather — all beautifully presented in a charming, pastel-colored frontend.

---

## ✨ Features

-  Hotel and place data fetched via **Geoapify API**
-  Real-time weather via **wttr.in**
-  Pre-defined city scraping
-  Pastel-colored, interactive frontend UI
-  Full-stack integration with Flask backend and static frontend
-  Deployable as a monolithic app on **Render**

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS (pastel theme), JavaScript
- **Backend**: Flask (Python)
- **APIs**: Geoapify, wttr.in
- **Deployment**: Render

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/itinerary-suggester.git
cd itinerary-suggester
```

### 2. Set Up Environment Variables
Create a .env file in the ```backend/``` directory:

```env
GEOAPIFY_API_KEY=your_api_key_here
```

### 3. Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 4. Run Scrapers
Run the scraping scripts to generate data for hotels, places, and weather:
```bash
python scrape_hotels.py
python scrape_places.py
python scrape_weather.py
```

### 5. Start the Flask Server
```bash
python app.py
```

### 6. Open Frontend
Navigate to the ```frontend/``` folder and open ```index.html``` in your browser.

Optionally, serve the frontend via Flask for deployment.

