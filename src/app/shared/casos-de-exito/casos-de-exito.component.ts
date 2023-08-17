import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CasosDeExito } from 'src/app/core/casosDeExito.mock';
import Swiper from 'swiper';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.component.html',
  styleUrls: ['./casos-de-exito.component.scss'],
})
export class CasosDeExitoComponent {
  casosExito = CasosDeExito;


  casosExitoOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: true,
    pullDrag: false,
    margin: 5,
    autoplay: true,
    items: 1,
    autoHeight: false,
    dots: false,
    responsive: {
      1250: {
        items: 6,
      },
      840: {
        items: 4,
      },
      522: {
        items: 3
      }

    },
  };
}
