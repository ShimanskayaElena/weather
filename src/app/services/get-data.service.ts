import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// tslint:disable-next-line:import-spacing
import  { Weather } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private appId = 'e47f39b2a7356377c12758ab1399b3a3';
  private urlAPI = `http://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<Weather> {
    const endpoint = this.urlAPI + `?id=${id}` + `&lang=ru` + `&appid=${this.appId}` + `&units=metric`;
    return this.http.get<Weather>(endpoint);
  }
}
