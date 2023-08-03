import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogSingleService{

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl
  })

  async getBlogSingleService(slug:string){
    return await this.api.get(`single?slug=${slug}`)
  }
}
