import { Component, Input } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-proyect-laptop',
  templateUrl: './proyect-laptop.component.svg',
  styleUrls: ['./proyect-laptop.component.scss'],
})
export class ProyectLaptopComponent {
  urlImage: string = 'assets/home/preview-bancolombia.png';

  @Input()
  set changeUrl(newImg:string | undefined){
    if (newImg) {
      this.urlImage = newImg;
    }

    this.manualSlideAnimation()
  }

  manualSlideAnimation() {
    gsap.fromTo(
      '.container-laptop-proyects',
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }
}
