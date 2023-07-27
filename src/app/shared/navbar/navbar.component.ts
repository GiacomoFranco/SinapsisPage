import { Component, Input } from '@angular/core';
import { Menus } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo = '../../../assets/img/logo.svg'
  flagEng = '../../../assets/img/english.png'

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  constructor(
    private MenuService : MenuService
  ) { }

  ngOnInit(): void{
    this.MenuService.getMenu().then(response => {
      this.navRouters = response.data
    })
  }

}
