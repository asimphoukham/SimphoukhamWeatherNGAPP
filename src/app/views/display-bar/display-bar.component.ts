import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';

@Component({
  selector: 'app-display-bar',
  templateUrl: './display-bar.component.html',
  styleUrls: ['./display-bar.component.scss']
})
export class DisplayBarComponent implements OnInit {
  private citySubscription: Subscription;
  cityList: string[] = [];

  constructor(private city: SearchBarService) { }

  ngOnInit() {
 /*    this.citySubscription = this.city.getCities().subscribe(cities => {
      this.cityList.push(cities);
      console.log([...this.cityList]);
    }); */
  }
}
