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

  async getIntegrantes(paged: number, perPage: number){
    return await this.api.get(`cpt-v2?slug=team&paged=${paged}&per_page=${perPage}`);
  }
}
