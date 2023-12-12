import { Component, Input, OnInit } from '@angular/core';
import { SliderPortafolio } from '@app/models/portafolioSlider.model';
import { PortafolioService } from '@app/services/portafolio.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.component.html',
  styleUrls: ['./casos-de-exito.component.scss'],
})
export class CasosDeExitoComponent implements OnInit {
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

  @Input() titulo_casos_de_exito: string;

  constructor(private router: Router, private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.getDataPortafolio();
  }

  async getDataPortafolio() {
    const cacheKey = 'ExitosService';

    try {
      const cache = await caches.open('ExitosService');
      const response = await cache.match(cacheKey);

      if (response) {
        const data = await response.json();
        this.casosExito = data;
      } else {
        const resp = await this.portafolioService.getAll();
        const { data } = resp;
        this.casosExito = data;
        await cache.put(cacheKey, new Response(JSON.stringify(this.casosExito)));
      }

    } catch (error) {
      console.error('Error al obtener datos desde la caché:', error);
    }
  }
  redirectDetail(slug: string) {
    this.router.navigate([`portafolio/${slug}`]);
  }
}
