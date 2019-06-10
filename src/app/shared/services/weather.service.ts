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
  constructor(private dataService: DataService) {}
  async getWeatherData(city: string) {
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {
        // console.log(data);
        this.apiData = data;
        // console.log('This is APIDATA --###------+++===>>>', this.apiData);
      });
      // console.log('This is APIDATA --###------+++===>>>', this.apiData);
    return this.apiData;
  }
  parseData(pData: any) {
    // this.wData = {}
    return pData;
  }
}
