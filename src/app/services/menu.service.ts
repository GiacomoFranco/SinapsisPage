import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  })

  async getMenu(id:number) {
    return this.api.get(`menu/${id}`)
  }
}


