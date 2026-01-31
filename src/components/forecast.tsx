import type { ForecastItem } from "../types/weather";

type Props = {
  data: ForecastItem[];
};

export default function Forecast({ data }: Props) {
  return (
  <div className="forecast">
    {data.map((item, index) => (
      <div className="forecast-card" key={index}>
        <p>{item.dt_txt.split(" ")[1]}</p>
        <strong>{Math.round(item.main.temp)}°C</strong>
        <div>{item.weather[0].main}</div>
      </div>
    ))}
  </div>
);

}
