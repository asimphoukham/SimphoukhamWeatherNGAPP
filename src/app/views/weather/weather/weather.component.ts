import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { IForecast, IWeather } from 'src/app/shared/interface/iweather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  today: number = Date.now(); // Date and time

  weatherData: IWeather;
  forecastData: IForecast[] = [];
  list: any[] = [];
  city: string;

  constructor(
    private SWeather: WeatherService,
    private SForecast: ForecastService
    ) { }

   async ngOnInit() {
     this.SWeather.currentWeather.subscribe(current => {
          this.weatherData = current;
     });
// tslint:disable-next-line: no-unused-expression
     this.SForecast;
     this.city = 'Stockton';
    // // await this.SWeather.getWeatherData(this.city).then(data => {
    // //   this.weatherData = data;
    // // });
     this.SForecast.extWeather.subscribe(current => {
      this.forecastData = current;
 });
    // this.forecastData = this.SForecast.getForecastData(this.city);
  }
}
