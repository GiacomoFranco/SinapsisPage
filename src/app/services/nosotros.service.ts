import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getNosotrosPage(){
    return await this.api.get('pages/?slug=nosotros');
  }

  async getIntegrantes(){
    return await this.api.get('cpt/?slug=team');
  }
}
