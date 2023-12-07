import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class postTypeData {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getPostTypeData( slug: string = 'post',currentPage: number = 1, perPage: number = 12) {
    return await this.api.get(`cpt-v2?slug=${slug}&paged=${currentPage}&per_page=${perPage}`)
  }

}
