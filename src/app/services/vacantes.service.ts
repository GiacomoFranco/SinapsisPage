import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class VacantesService{

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getVacancies(){
    return await this.api.get('filter-work?slug=work-with-us&tecnology=react&area=desarrollo&nivel=semi-senior');
  }
}
