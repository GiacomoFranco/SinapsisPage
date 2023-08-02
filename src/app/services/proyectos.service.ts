import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  })

  async getProductosDestacados() {
    return this.api.get(`cpt/?slug=casos-exito&_fields=title,general,slug`);
  }
}


