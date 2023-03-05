import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function BirhdateValidator(): ValidatorFn {
  var validationFunction = (
    control: AbstractControl
  ): ValidationErrors | null => {
    let birthdateYear = new Date(control.value).getTime();
    let today = new Date().getTime();
    let differenceMs = today - birthdateYear;
    let differenceDay = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    let ageRule = differenceDay / 365 >= 16;
    let yearRule = birthdateYear <= today;
    const isValid = ageRule && yearRule;
    return isValid ? null : { birthdateFormat: true };
  };

  return validationFunction;
}
