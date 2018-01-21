import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateCity (validCities: string[]): ValidatorFn {
  return (c: AbstractControl): object => {
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }
    return null;
  };
}
