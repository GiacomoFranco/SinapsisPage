import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { ServiciosService } from '@app/services/servicios.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input()isMobile: boolean;

  sliderItems: Servicio[] = [];

  customOptions: OwlOptions = {
    loop: true,
    freeDrag: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
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
  }

  async getSlider() {
    const cacheKey = 'SliderService';

    try {
      const cache = await caches.open('SliderService');
      const response = await cache.match(cacheKey);

      if (response) {
        const data = await response.json();
        this.sliderItems = data;
      }else{
        const resp = await this.service.getServicios();
        const { data } = resp;
        this.sliderItems = data;
        await cache.put(cacheKey, new Response(JSON.stringify(this.sliderItems)));
      }
    } catch (error) {
      console.error('Error al obtener datos desde la caché:', error);
    }
  }
}
