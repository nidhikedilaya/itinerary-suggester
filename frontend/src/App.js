import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import DataDisplay from "./components/DataDisplay";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCityChange = async (selectedCity) => {
    setCity(selectedCity);
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      const res = await fetch(`http://localhost:5000/data/${selectedCity}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Set error message to state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Itinerary Suggester</h1>
      <CitySelector onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && !loading && !error && (
        <div className="data-container">
          <DataDisplay city={city} data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
