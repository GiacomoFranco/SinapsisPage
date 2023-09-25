import { forwardRef, Directive, Input } from '@angular/core';

import { Validator, NG_VALIDATORS } from '@angular/forms';

export const requiredValidatorLogic = (required: any) => (control: any) => {
  if (!control.value) {
    return { valid: false };
  }

  return control.value.id && control.value.id !== null
    ? null
    : { valid: false };
};

const Required_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true,
};

@Directive({
  selector: '[isRequired]',
  providers: [Required_VALIDATOR],
})

export class RequiredValidator implements Validator {
  @Input() public isRequired: boolean;
  private _validator: any;
  constructor() {
    this._validator = requiredValidatorLogic(this.isRequired);
  }
  validate(c: any) {
    return this._validator(c);
  }
}
