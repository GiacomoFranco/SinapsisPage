import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkWithUsService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getWorkWithUsPage(){
    return await this.api.get('pages/?slug=trabaja-con-nosotros')
  }
}
