import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Flight} from "../../entities/flight";
import {AbstractFlightService} from "./abstract-flight.service";

@Injectable()
export class FlightService implements AbstractFlightService{

  constructor(private http: HttpClient) {
  }
  find(from: string, to: string): Observable<Flight[]> {
    let url = 'http://www.angular.at/api/flight';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    let params = new HttpParams()
      .set('from', from)
      .set('to', to);
    return this.http.get<Flight[]>(url, {headers, params});
  }

/*
  save(flight: Flight): Observable<Flight> {
    let url = 'http://www.angular.at/api/flight';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    //this.http
      return this.http.post<Flight>(url, flight,{headers});
  }*/

  findById(id: string): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams()
      .set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Flight>(url, { params, headers});
  }

  save(f: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Flight>(url, f, { headers});
  }

}
