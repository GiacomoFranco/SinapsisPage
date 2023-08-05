import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-postcarrousel',
  templateUrl: './postcarrousel.component.html',
  styleUrls: ['./postcarrousel.component.scss']
})
export class PostcarrouselComponent {
  @Input() BlogPosts: any[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 10,
    dots: true,
    navSpeed: 10,
    autoplaySpeed: 10000,
    responsive: {
      1024: {
        items: 2
      },
      767: {
        items: 1
      }
    }
  };
}
