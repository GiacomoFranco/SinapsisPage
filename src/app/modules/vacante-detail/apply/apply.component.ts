import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dragster } from '@matrx/dragster';
import '../../../../assets/smtp.js';
import { MailService } from '@app/services/mail.service';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { ApplyService } from '@app/services/apply.service';
import { Router } from '@angular/router';
declare let EmailSMTP: any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent {
  @Input() vacantName: string;
  @Output() toggleEmit = new EventEmitter<boolean>();
  @Input() set applyModalState(state: boolean) {
    this.possibleElement = document.querySelector('app-apply');
    if (state) {
      this.dragster = new Dragster(this.possibleElement);
    } else {
      if (this.dragster) {
        this.dragster._destroy();
      }
      this.resetForm();
    }
  }
  @HostListener('drop', ['$event']) drop(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragster.reset(this.possibleElement);
    this.toggleDropFile(event.type);
  }
  draggingFile: boolean = false;
  dragster: any;
  possibleElement: any;

  constructor(
    private mailService: MailService,
    private applyService: ApplyService,
    private router: Router
  ) {
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

  selectedUbication: any = 'Ubicación';
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

  isSending: boolean = false;
  fileBase64URI: string | null;
  fileRestrictions: FileRestrictions = {
    allowedExtensions: ['.pdf'],
  };

  async submitForm() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isSending = true;

      const formValue = this.form.value;
      const metadata = {
        vacante: this.vacantName,
        url: this.router.url,
        cv: this.fileBase64URI
      };

      this.mailService.setApplyMailContent(formValue);

      await this.applyService.postApply(formValue, metadata).then( async () => {
        this.form.reset();

        await EmailSMTP.send({
          Host: 'smtp.elasticemail.com',
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
        }).then(async (message: any) => {
          this.isSending = false;
          alert(message);
          if (message === 'OK') {
            this.form.reset();
          }
        });
      });
    }
  }

  selectedFileExtension: any = null;

  selectFile(event: any) {
    this.selectedFileExtension = event.files[0].extension;
  }

  removeSelectedFile() {
    this.selectedFileExtension = null;
  }

  completeUpload() {
    const formFiles: File[] | null = this.form.value.files;

    if (!formFiles) {
      this.fileBase64URI = formFiles;
    } else {
      this.convertFileToURI(formFiles[0]);
    }
  }

  convertFileToURI(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.fileBase64URI = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
}
