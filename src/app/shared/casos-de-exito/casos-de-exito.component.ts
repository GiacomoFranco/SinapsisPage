import { Component } from '@angular/core';
import { CasosDeExito } from 'src/app/core/casosDeExito.mock';
import Swiper from 'swiper';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.component.html',
  styleUrls: ['./casos-de-exito.component.scss']
})
export class CasosDeExitoComponent {
  swiper: Swiper | any;
  casosExito = CasosDeExito;
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 6,
      loop: true,
      direction: this.getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  getDirection() {
    let windowWidth = window.innerWidth;
    let direction: "vertical" | "horizontal" = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
  }
}
