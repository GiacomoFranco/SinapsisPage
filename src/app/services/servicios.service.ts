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
    const response = await this.api.get('servicios')
    return response
  }
}
