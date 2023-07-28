import { Component, Input } from '@angular/core';
import { Menus } from '@app/models/menu';
import { MenuService } from '@app/services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logo = '../../../assets/img/logo.svg'

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  constructor(
    private MenuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.MenuService.getMenu(24).then(response => {
      this.navRouters = response.data
    })
  }

}
