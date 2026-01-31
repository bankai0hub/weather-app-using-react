export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}
