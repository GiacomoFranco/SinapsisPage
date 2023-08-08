import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostFeaturedService{

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getBlogPostFeatured(){
    return await this.api.get('filter_tax?slug=post&tax=destacados')
  }
}
