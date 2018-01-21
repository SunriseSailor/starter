import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Passenger} from "../../entities/passenger";

@Component({
  selector: 'passenger-search',
  templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent implements OnInit {
  name: string;
  firstName:string;
  message: string;
  passengers: Array<Passenger> = [];
  selectedPassenger: Passenger;
  constructor(private http: HttpClient) {
  }

  ngOnInit() { }

  search(): void {
    let url = 'http://www.angular.at/api/passenger';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    let params = new HttpParams()
      .set('name', this.name)
      .set('firstName', this.firstName);
    this.http
      .get<Passenger[]>(url, {headers, params})
      .subscribe(
        (passengers: Passenger[]) => {
          this.passengers = passengers;
        },
        (errResp) => {
          console.error('Error loading flights', errResp);
        }
      );
  }


  select(p: Passenger): void {
    this.selectedPassenger = p;
  }


  save(): void {
    let url = 'http://www.angular.at/api/passenger';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    this.http
      .post<Passenger>(url, this.selectedPassenger, { headers })
      .subscribe(
        passenger => {
          this.selectedPassenger = passenger;
          this.message = "Erfolgreich gespeichert!";
        },
        errResponse => {
          console.error('Fehler beim Speichern', errResponse);
          this.message = "Fehler beim Speichern: ";
        }
      );
  }
}
