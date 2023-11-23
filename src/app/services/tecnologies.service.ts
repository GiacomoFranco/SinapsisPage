import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  constructor() { }

  async getDataTecnologias(){
    return await this.api.get('nuestras-tecnologias')
  }
}
