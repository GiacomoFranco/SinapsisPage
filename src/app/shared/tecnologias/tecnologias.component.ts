import { Component, OnInit, DoCheck } from '@angular/core';
import { Tecnologies } from 'src/app/core/tecnologias.mock';
import Swiper from 'swiper';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit, DoCheck {
  animIndex = 0
  animIndexCpy = -1
  swiper: Swiper | any;
  tecnologias = Tecnologies;
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.animIndex !== this.animIndexCpy && this.animIndex < this.tecnologias.length - 1) {
      this.animIndexCpy = this.animIndex
      setTimeout(() => {
        this.animIndex++;
      }, 50 * this.tecnologias.length);
    }
  }
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
