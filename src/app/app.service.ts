import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL = '/assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  
  getSingleSelectOptions () {
    return this.http.get(API_URL).pipe(
      map((d: any) => d.singleSelectOptions)
    );
  }

  getMultipleSelectOptions () {
    return this.http.get(API_URL).pipe(
      map((d: any) => d.multipleSelectOptions)
    );
  }

  getGroupingOptions () {
    return this.http.get(API_URL).pipe(
      map((d: any) => d.groupingOptions)
    );
  }

  getObservableOptions () {
    return this.http.get(API_URL).pipe(
      map((d: any) => of(d.observableOptions))
    );
  }
}
