import type { WeatherData, ForecastItem } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(
  city: string
): Promise<WeatherData> {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function getForecast(
  city: string
): Promise<ForecastItem[]> {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  const data = await res.json();
  return data.list.slice(0, 6);
}
