import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private searchSubject$ = new Subject<string[]>();
  private list: string[] = [];

  constructor() { }
  resetList() {
    this.list = [];
  }
  setSearchBar(searchCity: string) {
    this.list.push(searchCity);
    console.log('This list before give it to observe -->', this.list);
    this.searchSubject$.next(this.list);
  }
  getSearchBar(): Observable<any> {
    return this.searchSubject$.asObservable();
  }
}
