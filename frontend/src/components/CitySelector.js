import React from "react";

const CitySelector = ({ onCityChange }) => {
  const cities = [
    "Paris",
    "Tokyo",
    "New York",
    "Bangalore",
    "Berlin",
    "Singapore",
    "Rome",
    "Sydney",
    "Los Angeles",
  ];

  return (
    <select
      onChange={(e) => onCityChange(e.target.value)}
      disabled={cities.length === 0}
    >
      <option value="">Select a City</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
