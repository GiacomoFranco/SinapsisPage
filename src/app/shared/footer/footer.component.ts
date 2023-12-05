import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Menus } from '@app/models/menu';
import { MenuService } from '@app/services/menu.service';
import { FooterService } from '@app/services/footer.service';
import { Footer } from '@app/models/footer.model';
import { socialNetwork } from '@app/models/socialNetwork.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  footerData: Footer[];
  iconsSocial: socialNetwork[];

  @Input() navRouters: Menus[];

  constructor(
    private MenuService: MenuService,
    private footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.MenuService.getMenu(24).then(response => {
      this.navRouters = response.data
    })
    this.getDataFooter();
    this.getDataSocials();
  }

  getDataFooter(){
    this.footerService.getFooter().then(resp => {
      const {data} = resp;
      this.footerData = data
    })
  }

  getDataSocials(){
    this.footerService.getSocialNetwork().then(resp => {
      const {data} = resp;
      this.iconsSocial = data;
    })
  }
}

