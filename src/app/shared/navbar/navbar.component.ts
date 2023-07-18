import { Component, Input } from '@angular/core';
import { Menus } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo = '../../../assets/img/logo.png'
  flagEng = '../../../assets/img/english.png'
  navRouters:Menus[] = []

  constructor(
    private MenuService : MenuService
  ) { }

  ngOnInit(): void{
    this.MenuService.getMenu()
      .subscribe(data => {
        this.navRouters = data
    })
  }

  @Input() navReouters: Menus = {
    title: '',
    url: '',
    slug: ''
  }

}
