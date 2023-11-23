import { Component, OnInit } from '@angular/core';
import { SliderPortafolio } from '@app/models/portafolioSlider.model';
import { PortafolioService } from '@app/services/portafolio.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CasosDeExito } from 'src/app/core/casosDeExito.mock';
import Swiper from 'swiper';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.component.html',
  styleUrls: ['./casos-de-exito.component.scss'],
})
export class CasosDeExitoComponent implements OnInit{
  casosExito: SliderPortafolio[] = [];

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

  constructor(private portafolioService: PortafolioService){} 

  ngOnInit(): void {
    this.portafolioService.getAll().then(resp => {
      const {data} = resp;
      this.casosExito = data
    })
  }
}
