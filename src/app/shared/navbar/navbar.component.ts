import { Component, Input, HostListener, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('.o-header', { static: true }) elementoClase: ElementRef;

  @Input() navRouters: Menus[] = [{
    title: '',
    url: '',
    slug: ''
  }]

  constructor(
    private MenuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.MenuService.getMenu().then(response => {
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




}
