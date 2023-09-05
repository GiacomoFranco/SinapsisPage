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
    );
  }

  async getAreas() {
    return await this.api.get(`area`);
  }

  async getTecnologias() {
    return await this.api.get(`tecnologias`);
  }
}
