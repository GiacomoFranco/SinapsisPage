import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  private apiUrl = environment.API_URL;

  api = axios.create({
    baseURL: this.apiUrl,
  })

  async getTestimonios() {
    return this.api.get(`cpt?slug=testimonials&_fields=title,logoCompany,slug.companyName,companyPosition,testimonial,comment,score`);

  }
}


