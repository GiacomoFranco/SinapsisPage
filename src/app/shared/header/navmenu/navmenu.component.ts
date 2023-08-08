import { Component, Input } from '@angular/core';
import { Menus } from '@app/models/menu';
import { MenuService } from '@app/services/menu.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent {

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  constructor(
    private MenuService: MenuService,
  ) { }


  ngOnInit(): void {
    this.MenuService.getMenu(5).then(response => {
      this.navRouters = response.data
    })
  }


}
