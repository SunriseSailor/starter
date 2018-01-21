import {Observable} from "rxjs/Observable";
import {Flight} from "../../entities/flight";

export abstract class AbstractFlightService {
  abstract find(from: string, to:string): Observable<Flight[]>;
  abstract save(flight: Flight): Observable<Flight>;
}
