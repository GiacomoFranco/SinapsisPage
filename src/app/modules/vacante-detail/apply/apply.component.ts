import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dragster } from '@matrx/dragster';
// import { ApplyMail } from 'src/app/core/ApplyMail';
import '../../../../assets/smtp.js';
import { MailService } from '@app/services/mail.service';
declare let EmailSMTP: any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent {
  @Output() toggleEmit = new EventEmitter<boolean>();

  draggingFile: boolean = false;
  dragster: any;
  possibleElement: any;
  @Input() set applyModalState(state: boolean) {
    this.possibleElement = document.querySelector('app-apply');
    if (state) {
      this.dragster = new Dragster(this.possibleElement);
    } else {
      // this.dragster._destroy();
      this.resetForm();
    }
  }
  @HostListener('drop', ['$event']) drop(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragster.reset(this.possibleElement);
    this.toggleDropFile(event.type);
  }

  constructor(private mailService: MailService) {
    document.addEventListener(
      'dragster-enter',
      (event) => {
        this.toggleDropFile(event.type);
      },
      false
    );

    document.addEventListener(
      'dragster-leave',
      (event) => {
        console.log(event);

        this.toggleDropFile(event.type);
        this.dragster.reset(this.possibleElement);
      },
      false
    );
  }

  public form: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    ubications: new FormControl(null, Validators.required),
    files: new FormControl(null, Validators.required),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
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

  ubications: any[] = ['Medellín', 'Montería', 'Bogotá', 'Cali'];

  toggleModalState() {
    this.toggleEmit.emit(false);
  }

  toggleDropFile(eventListener: string): void {
    if (
      eventListener === 'dragover' ||
      eventListener === 'dragenter' ||
      eventListener === 'mouseenter' ||
      eventListener === 'dragster-enter'
    ) {
      this.draggingFile = true;
    } else {
      this.draggingFile = false;
    }
  }

  resetForm() {
    this.form.reset(); // Esto restablecerá los errores del FormGroup
  }


  fileBase64URI: string | null;

  submitForm() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value);

      const formValue = this.form.value;

      this.mailService.setApplyMailContent(formValue);

      EmailSMTP.send({
        Host: 'smtp.elasticemail.com',
        // SecureToken: 'c3b93799-a3b1-43ce-86bb-9347c06ec419',
        Username: 'passiflora.freelance@gmail.com',
        Password: '5708CF1810F3B65FFFCDEA0D960485DE7BAB',
        To: 'santiagogilfranco30@gmail.com',
        From: 'passiflora.freelance@gmail.com',
        Subject: 'santy subject',
        Body: this.mailService.getPlantillaApply(),
        Attachments: [
          {
            name: this.mailService.getFilename(),
            data: this.fileBase64URI,
          },
        ],
      }).then((message: any) => {
        alert(message);
        this.form.reset();
      });
    }
  }

  completeUpload(){
    const formFiles: File[] | null = this.form.value.files;

    if (!formFiles) {
      this.fileBase64URI = formFiles;
    } else {
      this.convertFileToURI(formFiles[0])
    }
  }

  convertFileToURI(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.fileBase64URI = reader.result as string;
      console.log(this.fileBase64URI);

    };

    reader.readAsDataURL(file);
  }
}
