import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async (cityName) => {
    try {
      setError("");
      setWeather(null);

      // Step 1: Get latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found!");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];
      setCity(name);

      // Step 2: Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData.current_weather);
    } catch (err) {
      setError("Error fetching weather data");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather Now</h1>

      <SearchBar onSearch={getWeather} />

      {error && <p className="text-red-200">{error}</p>}

      {weather && <WeatherCard city={city} weather={weather} />}
    </div>
  );
}

export default App;
