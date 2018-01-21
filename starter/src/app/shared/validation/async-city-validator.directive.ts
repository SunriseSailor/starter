import { Directive } from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {FlightService} from "../../flight-booking/flight-search/flight.service";
import {Observable} from "rxjs/Observable";

@Directive({
  selector: '[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityValidatorDirective,
    multi: true
  }]
})
export class AsyncCityValidatorDirective {

  constructor(private flightService: FlightService) {
  }

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService
      .find(c.value, '')
      .map(flights => (flights.length) > 0 ? {} : {asyncCity: true});
  }
}
