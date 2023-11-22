import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getHomePage(){
    return await this.api.get('pages/?slug=home')
  }
}
