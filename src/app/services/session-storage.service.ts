import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  keyForCities = 'selectedCities';
  selectedCities: Array<number> = [];

  keyForWatch = 'watch';

  watch = new BehaviorSubject<boolean>(false);

  constructor() {

    if ( !sessionStorage.getItem(this.keyForCities)) {
      sessionStorage.setItem(this.keyForCities, JSON.stringify(this.selectedCities));
    } else {
      this.selectedCities = JSON.parse(sessionStorage.getItem(this.keyForCities) as string);
    }

    if ( !sessionStorage.getItem(this.keyForWatch)) {
      sessionStorage.setItem(this.keyForWatch, JSON.stringify(this.watch.getValue()));
    } else {
      this.watch.next(JSON.parse(sessionStorage.getItem(this.keyForWatch) as string));
    }
  }

  setSelectedCities(id: number): void {
    this.selectedCities.push(id);
    sessionStorage.setItem(this.keyForCities, JSON.stringify(this.selectedCities));
  }

  getSelectedCities(): Array<number> {
    return this.selectedCities;
  }

  setWatchProcess(value: boolean): void {
    this.watch.next(value);
    sessionStorage.setItem(this.keyForWatch, JSON.stringify(this.watch.getValue()));
  }

  getWatchProcess(): boolean {
    return JSON.parse(sessionStorage.getItem(this.keyForWatch) as string);
  }

  disabledButton(): Observable<boolean> {
    return this.watch.asObservable();
  }
}
