import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss'],
})
export class ContactanosComponent {
  public form: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    Description: new FormControl(null, Validators.required),
    terms: new FormControl(null, Validators.required),
  });

  get Telefono(): FormControl {
    return this.form.get('telefono') as FormControl;
  }

  get Email(): FormControl {
    return this.form.get('email') as FormControl;
  }
}

