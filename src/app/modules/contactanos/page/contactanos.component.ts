import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import '../../../../assets/smtp.js';
import { MailService } from '@app/services/mail.service';
declare let EmailSMTP: any;

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss'],
})
export class ContactanosComponent {
  constructor(private mailService: MailService) {}

  public form: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    mensaje: new FormControl(null, Validators.required),
    terms: new FormControl(null, [
      Validators.required,
      Validators.requiredTrue,
    ]),
  });

  get Telefono(): FormControl {
    return this.form.get('telefono') as FormControl;
  }

  get Email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get TermsAndConditions(): FormControl {
    return this.form.get('terms') as FormControl;
  }

  submitForm() {
    this.form.markAllAsTouched();
    console.log(this.form);

    if (this.form.valid) {
      const formValue = this.form.value;


      this.mailService.setMensajeMailContent(formValue);

      EmailSMTP.send({
        Host: 'smtp.elasticemail.com',
        // SecureToken: 'c3b93799-a3b1-43ce-86bb-9347c06ec419',
        Username: 'passiflora.freelance@gmail.com',
        Password: '5708CF1810F3B65FFFCDEA0D960485DE7BAB',
        To: 'santiagogilfranco30@gmail.com',
        From: 'passiflora.freelance@gmail.com',
        Subject: 'santy subject',
        Body: this.mailService.getPlantillaMensaje(),
      }).then((message: any) => {
        alert(message);
        this.form.reset();
      });
    }
  }
}

