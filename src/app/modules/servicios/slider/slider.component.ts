import { Component, OnInit } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { ServiciosService } from '@app/services/servicios.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  isMobile = false;

  sliderItems: Servicio[] = [];

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
        items: 5,
      },
      767: {
        items: 3,
      },
    },
  };

  constructor(private service: ServiciosService){}

  ngOnInit(): void {
    this.getSlider();
    this.checkWindowSize();
  }

  getSlider() {
    this.service.getServicios().then((resp) => {
      const { data } = resp;
      this.sliderItems = data;
    });
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }
}