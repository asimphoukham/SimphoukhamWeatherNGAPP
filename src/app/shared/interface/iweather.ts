export interface IWeather {
 /*  lon: number;
  lat: number;
  weatherMain: string;
  description: string;
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  visibility: number;
  windSpeed: number;
  windGust: number;
  windDeg: number;
  dt: number;
  country: string;
  timezone: number;
  id: number; */
  name: string;
  temp: number;
  windSpeed: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
  visibility: number;
  description: string;
  icon: string;
}
export interface IForecast {
  temp: number;
  /* visibility: number; */
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  weatherMain: string;
  description: string;
  icon: string;
  windSpeed: number;
  windDeg: number;
  dt: string;
  id: number;
  name: string;
}
