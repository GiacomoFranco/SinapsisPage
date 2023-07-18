import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menus } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    return this.http.get<Menus[]>('https://admin-sinapsis.sinapsisdev.com/wp-json/wp/v2/menu/5');
  }
}


