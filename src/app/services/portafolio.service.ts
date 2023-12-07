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

  async getAll(){
    return await this.api.get('cpt?slug=casos-exito&_fields=slug,general.logo')
  }

  async getPagePortafolio(paged:number, perPage: number){
    return await this.api.get(`cpt-v2?slug=casos-exito&paged=${paged}&per_page=${perPage}`)
  }

  async getInfoPagePortafolio(){
    return await this.api.get('pages/?slug=portafolio')
  }
}
