import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private API_URL="assets/documentation-data.json";
  constructor(private _httpClient: HttpClient) { }

  getDocData(topic: string) {
    return this._httpClient.get(this.API_URL)
      .pipe(map(d => d[topic]));
  }
}
