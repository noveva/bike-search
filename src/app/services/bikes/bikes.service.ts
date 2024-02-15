import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bike } from './bikes.typings';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  constructor(private http: HttpClient) {}

  getBikes(query?: string, limit = 24): Observable<Bike[]> {
    const options = { params: new HttpParams().set('per_page', limit) };

    if (query) {
      options.params.set('query', query);
    }

    return this.http
      .get<{
        bikes: Bike[];
      }>(`https://bikeindex.org/api/v3/search`, options)
      .pipe(map(response => response.bikes));
  }
}
