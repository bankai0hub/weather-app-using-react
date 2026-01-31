import { useEffect, useState } from "react";
import WeatherCard from "./components/weathercard";
import Forecast from "./components/forecast";
import type { WeatherData, ForecastItem } from "./types/weather";
import { getCurrentWeather, getForecast } from "./services/weatherApi";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecastData] = useState<ForecastItem[]>([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError("");
      setWeather(await getCurrentWeather(city));
      setForecastData(await getForecast(city));
    } catch {
      setError("City not found");
    }
  };

useEffect(() => {
  fetchData();
}, []);

const getBgClass = () => {
  if (!weather) return "bg-default";

  const main = weather.weather[0].main;

  if (main === "Clear") return "bg-clear";
  if (main === "Clouds") return "bg-clouds";
  if (main === "Rain" || main === "Drizzle") return "bg-rain";
  if (main === "Snow") return "bg-snow";

  return "bg-default";
};


return (
  <div className={`app ${getBgClass()}`}>
    <div className="container">
      <h1 className="title">Weather App</h1>

      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={fetchData}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard data={weather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  </div>
);
}
