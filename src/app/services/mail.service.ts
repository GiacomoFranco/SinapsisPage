import { Injectable } from '@angular/core';
import plantillaApply from '@app/core/plantillaApply';
import plantillaMensaje from 'src/app/core/plantillaMensaje';
import { plantillaApplyModel } from '@app/models/plantillaApply.model';
import { environment } from 'src/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = environment.SENDGRID_API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  });

  constructor() {}

  applyMailContent: any;

  mensajeMailContent: any;

  setApplyMailContent(formContent: plantillaApplyModel) {
    this.applyMailContent = formContent;
  }

  setMensajeMailContent(formContent: plantillaApplyModel) {
    this.mensajeMailContent = formContent;
  }

  getPlantillaApply(): string {
    console.log(this.applyMailContent);

    return plantillaApply(this.applyMailContent, 'Angular Frontend', 'Germán');
  }

  getPlantillaMensaje(): string {
    return plantillaMensaje(this.mensajeMailContent, 'Germán');
  }

  parseTitleCase(name: string): string {
    return name
      .split(' ')
      .map((namePart) => namePart.charAt(0).toUpperCase() + namePart.slice(1))
      .join(' ');
  }

  getFilename(): string {
    const file = this.applyMailContent.files[0];
    // separamos la extensión del tipo
    const fileExtension: string = file.type.slice(file.type.indexOf('/') + 1);

    return `Curriculum ${
      this.parseTitleCase(this.applyMailContent.fullName) + '.' + fileExtension
    }`;
  }

  getFile(): any {
    return this.applyMailContent.files[0];
  }

  /* ---------------------------- */

  // async sendGridRequest(URIFile: string | null = null) {

  //   const mailStructure: any = {
  //     to: 'santiagogilfranco30@gmail.com',
  //     from: 'german.otalvaro@sinapsis.global',
  //     subject: 'This should be the subject',
  //     text: 'This is the text',
  //     html: URIFile ? this.getPlantillaApply() : this.getPlantillaMensaje(),
  //   };

  //   if (URIFile) {
  //     mailStructure.attachments = [
  //       {
  //         filename: this.getFilename(),
  //         content: URIFile,
  //       },
  //     ]
  //   }

  //   console.log(mailStructure);


  //   const headers = {
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer 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"
  //   }

  //   return await this.api.post(`/v3/mail/send`, mailStructure, {headers: headers})
  // }
}
