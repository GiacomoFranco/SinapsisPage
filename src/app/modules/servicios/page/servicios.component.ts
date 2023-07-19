import { Component, AfterViewInit, OnInit } from '@angular/core';
import sliderData from 'src/app/core/slider.mock';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements AfterViewInit {

  sliderItems: Slider[] = []

  ngAfterViewInit(): void {
    this.sliderItems = sliderData
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false
      // },
      // speed: 1000
    });
  }
}
