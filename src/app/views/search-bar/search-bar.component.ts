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
  searchList: string[] = [];

  constructor(private searchService: SearchBarService,
              private SWeather: WeatherService,
              private SForecast: ForecastService) { }

  ngOnInit() {
    this.searchSubscription = this.searchService.getSearchBar()
      .subscribe(listItem => {
        this.searchList.push(listItem);
      });
  }
  addSearchItem(value: string) {
    console.log('addSearch', value);
    this.searchService.setSearchBar(value);

  }
  getCityData(e: any) {
    console.log(e.target.innerText);
    // changes
  }
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
