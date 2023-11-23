import { Component, Input, OnInit } from '@angular/core';
import { Testimonio } from '@app/models/testimonio.model';
import { TestimoniosService } from '@app/services/testimonios.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss'],
})
export class TestimoniosComponent implements OnInit {

  @Input() dataSection = {
    titulo_testimonios: '',
    descripcion_testimonio: ''
  }
  isPendingTestimonios: boolean = true;
  testimonios: Testimonio[];
  testimonyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: false,
    pullDrag: false,
    margin: 20,
    autoplay: true,
    items: 1,
    autoplayTimeout: 10,
    dots: true,
    responsive: {
      1146: {
        items: 3,
      },
      746: {
        items: 2,
      },
    },
  };
  
  constructor(private testimoniosService: TestimoniosService) {}

  ngOnInit(): void {
    this.testimoniosService.getTestimonios().then((resp) => {
      this.testimonios = resp.data;
      this.isPendingTestimonios = false;
    });
  }

  starsLogic(score: Number | String): number[] {
    let stars: number[] = [];
    let parsedScore = Number(score);
    let totalStars = Math.ceil(parsedScore);
    for (let index = 0; index < totalStars; index++) {
      if (parsedScore < 1) {
        stars[index] = Number(parsedScore.toFixed(2));
      } else {
        stars[index] = 1;
        parsedScore--;
      }
    }
    return stars;
  }
  starClipped(decimal: number): string {
    let operation = 20 * decimal;
    return operation.toString();
  }
}
