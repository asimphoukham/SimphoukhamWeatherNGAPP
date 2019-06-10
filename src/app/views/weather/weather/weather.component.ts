import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: any = {};
  forecastData: any = {};
  list: any[] = [];
  city: string;
  constructor(
    private SWeather: WeatherService,
    private SForecast: ForecastService
    ) { }


   async ngOnInit() {
    this.city = 'Modesto';
    await this.SWeather.getWeatherData(this.city).then(data => {
      this.weatherData = data;
    });
    await this.SForecast.getForecastData(this.city).then(data => {
      this.forecastData = data;
    });
    // this.forecastData = this.SForecast.getForecastData(this.city);
    console.log('NGONinit for Weather', this.weatherData);
    console.log('NGONinit for forecast', this.forecastData);
  }
}
