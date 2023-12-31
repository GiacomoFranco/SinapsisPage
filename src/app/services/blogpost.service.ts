import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService{

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getBlogPost(paged: number, perPage: number) {
    return await this.api.get(`cpt/?slug=post&paged=${paged}&per_page=${perPage}`)
  }
}
