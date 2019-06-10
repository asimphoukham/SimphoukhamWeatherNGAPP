import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlBase = 'https://api.openweathermap.org/data/2.5/';
  private urlKEY = '&units=imperial&appid=b64078a28dba172e3f3595d90eb146e8';
  constructor(private http: HttpClient) { }
  getUrl(urlSearch: string) {
    // console.log(this.urlBase + urlSearch + this.urlKEY);
    return this.http.get(this.urlBase + urlSearch + this.urlKEY);
  }
}
