import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private httpClient: HttpClient) { }

  getCovidData() {
    const url = 'https://data.incovid19.org/v4/min/data.min.json';
    return this.httpClient.get(url);
  }
}
