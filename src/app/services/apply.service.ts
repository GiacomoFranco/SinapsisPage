import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  constructor() {}

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  });

  async postApply(form: any, metadata: any) {

    console.log(form.files[0]);

    const apply = {
      ...metadata,
      name: form.fullName,
      phone: form.telefono,
      ubicacion: form.ubications,
      'cv_file': form.files[0],
    };

    const headers = {
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarysWJQbO8AYoGkXYuH',
    };

    return await this.api.post(`/apply`, apply, {headers: headers} )
  }
}
