import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getTermsAndConditions(){
    return await this.api.get('pages/?slug=terminos-y-condiciones');
  }

  async getContactUsPage(){
    return await this.api.get('pages/?slug=contactanos');
  }
}
