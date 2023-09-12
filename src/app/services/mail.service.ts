import { Injectable } from '@angular/core';
import plantillaApply from '@app/core/plantillaApply';
import { plantillaApplyModel } from '@app/models/plantillaApply.model';
import plantillaMensaje from 'src/app/core/plantillaMensaje';


@Injectable({
  providedIn: 'root',
})
export class MailService {
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
}
