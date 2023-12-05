import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getFooter(){
    return await this.api.get('footer')
  }
  
  async getSocialNetwork(){
    return await this.api.get('socials')
  }
}
