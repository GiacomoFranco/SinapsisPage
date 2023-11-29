import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import '../../../../assets/smtp.js';
import { MailService } from '@app/services/mail.service';
import { SeoService } from '@app/services/seo.service';
import { ContactUs } from '@app/models/contactUs.model';
import { ContactUsService } from '@app/services/contact-us.service';
declare let EmailSMTP: any;

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss'],
})
export class ContactanosComponent implements OnInit{

  dataPage: ContactUs;

  constructor(
    private mailService: MailService,
    private seoService: SeoService,
    private contactUsService: ContactUsService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.FlagsSEO();
  }

  private getData(){
    this.contactUsService.getContactUsPage().then(resp => {
      const {data} = resp;
      this.dataPage = data;
    })
  }

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

  isSending: boolean = false;
  submitForm() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isSending = true;
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
        this.isSending = false;
        alert(message);
        if (message === 'OK') {
          this.form.reset();
        }
      });
    }
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Contáctanos',
      description:
        '¿Tienes alguna pregunta o consulta? ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros en la sección de Contáctanos y descubre cómo podemos colaborar en tu próximo proyecto tecnológico.',
      keywords:
        'contacto Sinapsis, preguntas, consultas, colaboración tecnológica, contacto equipo Sinapsis, comunicación, proyecto tecnológico',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }
}

