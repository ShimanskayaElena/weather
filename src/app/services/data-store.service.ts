import { Injectable, ComponentRef } from '@angular/core';
import { Observable, ReplaySubject} from 'rxjs';
import { cities } from '../data';
import { City } from '../model/city';
import { CityComponent } from '../city/city.component';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  cities: Array<City> = cities;
  showCities = new Map();
  selectCity$ = new ReplaySubject<City>(1);

  constructor() { }

  setSelectCity(city: City): void {
    this.selectCity$.next(city);
  }

  getSelectCity(): Observable<City> {
    return this.selectCity$;
  }

  getSities(): Array<City> {
    return this.cities;
  }

  setShowCities(id: number, elem: ComponentRef<CityComponent>): void {
    this.showCities.set(id, elem);
  }
}
