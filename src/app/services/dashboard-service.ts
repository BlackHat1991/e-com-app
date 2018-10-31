import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class DashboardService {
  apiendpoint = 'https://api.coinmarketcap.com/v2/listings/';
  constructor(private  httpClient:  HttpClient) { 
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
  }
     
  getCryptocurrencyActiveList(): Observable<any> {
    return this.httpClient.get(this.apiendpoint).pipe(
      map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
