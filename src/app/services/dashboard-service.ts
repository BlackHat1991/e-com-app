import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class DashboardService {
  constructor(private  httpClient:  HttpClient) { 
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
  }



  getCryptocurrencyActiveList(): Observable<any> {
    return this.httpClient.get("/assets/data/active_Ico.json").pipe(
      map(this.extractData));
  }

  getCryptocurrencyUpcomingList(): Observable<any> {
    return this.httpClient.get("/assets/data/upcoming_Ico.json").pipe(
      map(this.extractData));
  }


  getCryptocurrencyEndedList(): Observable<any> {
    return this.httpClient.get("/assets/data/end_Ico.json").pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
