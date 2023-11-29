import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Menus } from '@app/models/menu';
import { MenuService } from '@app/services/menu.service';
import { FooterService } from '@app/services/footer.service';
import { Footer } from '@app/models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  logo = '../../../assets/img/logo.svg'
  twitter = '../../assets/icons/social/twitter.svg'
  facebook = '../../assets/icons/social/facebook.svg'
  linkedin = '../../assets/icons/social/linkedin.svg'
  instagram = '../../assets/icons/social/instagram.svg'

  footerData: Footer[];

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  constructor(
    private MenuService: MenuService,
    private footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.MenuService.getMenu(24).then(response => {
      this.navRouters = response.data
    })
    this.getDataFooter();
  }

  getDataFooter(){
    this.footerService.getFooter().then(resp => {
      const {data} = resp;
      this.footerData = data
    })
  }
}

