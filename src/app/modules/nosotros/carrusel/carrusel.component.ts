import { Component, Input } from '@angular/core';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 10,
    dots: false,
    navSpeed: 10,
    autoplaySpeed: 10000,
    responsive: {
      1024: {
        items: 3
      },
      767: {
        items: 2
      }
    }
  };

  @Input() isMobile: boolean;

  @Input() pageData: nosotrosPage;
}
