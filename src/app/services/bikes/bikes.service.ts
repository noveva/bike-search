import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bike } from './bikes.typings';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  constructor(private http: HttpClient) {}

  getBikes(query?: string): Observable<Bike[]> {
    return this.http
      .get<{
        bikes: Bike[];
      }>(`https://bikeindex.org/api/v3/search${query ? '?query=' + query : ''}`)
      .pipe(map(response => response.bikes));
  }
}
