import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IForecast } from '../interface/iweather';
import * as _ from 'lodash';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiData: any = {};
  private fData: IForecast[] = [];
  public extWeather = new Subject<any>();
  private urlWeather = 'forecast?q=';
  forecastData: any = [];
  constructor(private dataService: DataService) { }
  async getForecastData(city: string) {
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {
        // console.log(data);
        this.apiData = data;
        this.getFiveDaysDisplay(data);
        // next(this.parseForecastData(this.apiData));
        // console.log('This is APIDATA --###------+++===>>>', this.apiData);
      });
    // console.log('This is APIDATA ForeCast--****--+++====>>>', this.apiData);
    // this.parseForecastData(this.apiData);
    return this.parseForecastData(this.apiData);
  }

  parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);
    // let myDate = new Date( your epoch date *1000);
    this.fData = [];
    for (const i of [...parseD.list]) {
      // console.log('This is i -->', i);
      const myDate = new Date(i.dt * 1000);
      i.dt = myDate.toDateString();
      const nfo: IForecast = {
        temp: i.main.temp,
        temp_min: i.main.temp_min,
        temp_max: i.main.temp_max,
        pressure: i.main.pressure,
        humidity: i.main.humidity,
        weatherMain: i.weather[0].main,
        description: i.weather[0].description,
        icon: i.weather[0].icon,
        windSpeed: i.wind.speed,
        windDeg: i.wind.deg,
        dt: i.dt,
        /*  visibility: i.visibility, */
        id: parseD.city.id,
        name: parseD.city.name,
      };
      this.fData.push(nfo);
      console.log(nfo);
    }
    console.log('This is fDATA -->', this.fData);
    return this.fData;
  }
  getFiveDaysDisplay(data) {
    this.forecastData = [];
    // tslint:disable-next-line: only-arrow-functions
    this.fData = this.parseForecastData(data);

// tslint:disable-next-line: only-arrow-functions
    const dates = _.groupBy(this.fData, function(day) { return day.dt; });
    // Group objective array by dates
    // console.log('Dates of Week: ', dates);
    const distinctDates = Object.keys(dates);

    // console.log('Distinct Dates: ', distinctDates);
    // Change array to an Objective array

    for (let i = 0; i <= distinctDates.length - 1; i++) {
      // const currentDateArray = dates[distinctDates[i]];

      const maxTempForAGivenDay = _.maxBy(_.filter(this.fData,
        // tslint:disable-next-line: only-arrow-functions
        function(date) { return date.dt === distinctDates[i]; }),
        // tslint:disable-next-line: only-arrow-functions
        function(day) { return day.temp_max; });
      // Filter the max_temp per day
      // console.log('Maximum Temp is: ', maxTempForAGivenDay);

      this.forecastData.push(maxTempForAGivenDay);
    }
    this.forecastData.splice(0, 1);
    this.extWeather.next(this.forecastData);
    // console.log('This is the FIVE DAYS display =>', this.fiveDaysWeather);
  }
}
