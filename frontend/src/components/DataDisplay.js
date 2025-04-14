import React from "react";

const DataDisplay = ({ city, data }) => {
  return (
    <div>
      <h2>{city}</h2>
      <h3>Weather</h3>
      {data.weather &&
      data.weather.temperature_C &&
      data.weather.description ? (
        <div>
          <p>
            <strong>Temperature:</strong> {data.weather.temperature_C} °C
          </p>
          <p>
            <strong>Description:</strong> {data.weather.description}
          </p>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}

      <h3>Hotels</h3>
      <ul>
        {data.hotels.map((hotel, idx) => (
          <li key={idx}>{hotel}</li>
        ))}
      </ul>

      <h3>Places</h3>
      <ul>
        {data.places.map((place, idx) => (
          <li key={idx}>{place}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
