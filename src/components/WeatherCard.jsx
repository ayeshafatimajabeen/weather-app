import React from "react";

function WeatherCard({ city, weather }) {
  return (
    <div className="bg-white text-blue-700 p-6 rounded-xl shadow-lg w-80">
      <h2 className="text-xl font-bold mb-2">Weather in {city}</h2>
      <p>🌡 Temperature: {weather.temperature}°C</p>
      <p>💨 Wind Speed: {weather.windspeed} km/h</p>
      <p>🧭 Wind Direction: {weather.winddirection}°</p>
    </div>
  );
}

export default WeatherCard;
