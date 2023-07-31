import { Component, Input, HostListener} from '@angular/core';
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
  isScrolled: boolean = false;
  showMenu: boolean = false;
  animationHamburger: boolean = false;

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  @Input() langOPtions = [
    { value: 'es', lang: 'Español', img: this.flagEng },
    { value: 'en', lang: 'English', img: this.flagEng}
  ]

  constructor(
    private MenuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.MenuService.getMenu(5).then(response => {
      this.navRouters = response.data
    })
  }

  detectScroll():void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      this.isScrolled=false
    } else {
      this.isScrolled=true
    }
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    this.detectScroll()
  }


  moveToTop(index: number) {
    if (index >= 0 && index < this.langOPtions.length) {
      const selectedLang = this.langOPtions[index];
      this.langOPtions.splice(index, 1);
      this.langOPtions.unshift(selectedLang);
    }
  }

  responsiveMenu() {
    this.showMenu = !this.showMenu
    this.animationHamburger = !this.animationHamburger
  }



}
