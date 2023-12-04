import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqServices{

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getFAQ(){
    return await this.api.get('cpt?slug=faq')
  }

  async getFeaturedFAQ(){
    return await this.api.get('cpt?slug=faq&taxonomy=category&term=destacados')
  }
}
