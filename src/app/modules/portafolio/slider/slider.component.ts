import { Component, OnInit } from '@angular/core';
import { SliderPortafolio } from '@app/models/portafolioSlider.model';
import { PortafolioService } from '@app/services/portafolio.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
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
        items: 8
      },
      767: {
        items: 2
      }
    }
  };

  sliderData: SliderPortafolio[]

  constructor(private portafolioService: PortafolioService){}

  ngOnInit(): void {
    this.portafolioService.getAll().then(resp => {
      const {data} = resp;
      this.sliderData = data
    })
  }
}
