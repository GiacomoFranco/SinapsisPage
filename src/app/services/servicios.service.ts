import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getServicios(){
    return await this.api.get('servicios')
  }

  async getServicesPage(){
    return await this.api.get('pages/?slug=servicios')
  }
}
