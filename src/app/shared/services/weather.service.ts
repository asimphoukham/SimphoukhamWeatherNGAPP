import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IWeather } from '../interface/iweather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiData: any;
  private wData: IWeather;
  private urlWeather = 'weather?q=';
  constructor(private dataService: DataService) { }
  async getWeatherData(city: string) {  // try, catch
    try{
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {
        // console.log(data);
        this.apiData = data;
        // console.log('This is APIDATA --###------+++===>>>', this.apiData);
      });
    console.log('This is APIDATA --###------+++===>>>', this.apiData);
    /*  return this.apiData; */
    return this.parseData(this.apiData);
    } catch{
      alert('There was an error');
    }
  }
  parseData(pData: any) {
    this.wData = {
      name: pData.name,
      temp: pData.main.temp,
      windSpeed: pData.wind.speed,
      humidity: pData.main.humidity,
      temp_max: pData.main.temp_max,
      temp_min: pData.main.temp_min,
      visibility: pData.visibility,
      description: pData.weather[0].description,
    };
    /*   return pData; */
    return this.wData;
  }
}
