import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private searchSubscription: Subscription;
  city: string;

  constructor(private searchService: SearchBarService,
              private SWeather: WeatherService,
              private SForecast: ForecastService) { }

  ngOnInit() {
    this.city = '';
    this.searchSubscription = this.searchService.getSearchBar()
      .subscribe(listItem => {
      });
  }
  async searchCity() {
      await this.SWeather.getWeatherData(this.city);
      await this.SForecast.getForecastData(this.city);
    }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
