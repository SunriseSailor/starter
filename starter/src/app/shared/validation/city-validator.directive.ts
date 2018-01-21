import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator{

  validate(c: AbstractControl): ValidationErrors | null {
    const validCities: string[] = ['Hamburg', 'Graz'];
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      }
    }
    return null;
  }
  @Input() city: string[];

/*validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && this.city.indexOf(c.value) === -1) {
      return {
        city: {
          actualCity: c.value,
          validCities: this.city
        }
      }
    }
    return {};
  }
*/

  constructor() { }

}
