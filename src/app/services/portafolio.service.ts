import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getDetail(slug: string){
    return await this.api.get(`single?post_type=casos-exito&slug=${slug}`)
  }
}
