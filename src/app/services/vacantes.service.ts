import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class VacantesService {
  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  });

  async getVacancies(filters : { area:string | null , tecnologia: string | null, search: string } = { area: null, tecnologia: null, search: ''}) {

    return await this.api.get(
      `filter-work?slug=work-with-us${filters.tecnologia ? `&tecnology=${filters.tecnologia}` : ''}${filters.area ? `&area=${filters.area}` : ''} ${filters.search !== '' ? `&search=${filters.search}` : ''}`
    )
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
      return error
    });
  }

  async getAreas() {
    return await this.api.get(`area`);
  }

  async getTecnologias() {
    return await this.api.get(`tecnologias`);
  }

  async getVacancy(slug: string){
    return await this.api.get(`single?post_type=work-with-us&slug=${slug}`);
  }
}
