import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IWeather } from '../interface/iweather';
import { Subject } from 'rxjs';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiData: any;
  private wData: IWeather;
  public currentWeather = new Subject<any>();
  private urlWeather = 'weather?q=';
  constructor(private dataService: DataService) { }
  async getWeatherData(city: string) {  // try, catch
    try {
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {
        console.log('WeatherService SAYS: this the api data ----->', data);
        this.apiData = data;
        this.currentWeather.next(this.parseData(data));
      });
    console.log('This is APIDATA ===>>>', this.apiData);
    /*  return this.apiData; */
    return this.parseData(this.apiData);
    } catch {
      alert('There was an error');
    }
  }
  parseData(pData: any) {
    console.log('data: pData', pData);
    this.wData = {
      name: pData.name,
      temp: pData.main.temp,
      windSpeed: pData.wind.speed,
      humidity: pData.main.humidity,
      temp_max: pData.main.temp_max,
      temp_min: pData.main.temp_min,
      visibility: pData.visibility,
      description: pData.weather[0].description,
      icon: pData.weather[0].icon,
    };
    /*   return pData; */
    return this.wData;
  }
}
