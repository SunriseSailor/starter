import { of } from 'rxjs/observable/of';
import {Injectable} from "@angular/core";
import {AbstractFlightService} from "./abstract-flight.service";
import {Observable} from "rxjs/Observable";
import {Flight} from "../../entities/flight";

@Injectable()
export class DummyFlightService implements AbstractFlightService {

  save(flight: Flight): Observable<Flight> {
    return of(flight);
  }

  find(from: string, to: string): Observable<Flight[]> {
    return of([{id: 17, from: 'Graz', to: 'Hamburg', date: '2022-01-01', delayed: true}]);
    }


}

