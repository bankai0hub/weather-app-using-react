import type { WeatherData } from "../types/weather";

type Props = {
  data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
  const iconCode = data.weather[0].icon;

return (
  <>
    <div className="card">
      {/* WEATHER ICON */}
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="weather icon"
        style={{ width: "80px", height: "80px" }}
      />

      <h2>{data.name}</h2>
      <h1>{Math.round(data.main.temp)}°C</h1>
      <p>{data.weather[0].description}</p>

      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
    <div
      style={{
        background: "rgba(255,255,255,0.15)",
        borderRadius: "12px",
        width: "90px",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        style={{ width: "70px", height: "70px" }}
      />
    </div>
  </>
);
}