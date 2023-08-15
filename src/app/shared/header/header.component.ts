import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class headerComponent {
  isScrolled: boolean = false;
  showMenu: boolean = false;
  animationHamburger: boolean = false;

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


  responsiveMenu() {
    this.showMenu = !this.showMenu
    this.animationHamburger = !this.animationHamburger
  }

}
