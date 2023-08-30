import { Component, Input } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-proyect-laptop',
  templateUrl: './proyect-laptop.component.svg',
  styleUrls: ['./proyect-laptop.component.scss'],
})
export class ProyectLaptopComponent {
  urlImage: string = '';
  id: string;
  // animationExecuted: boolean = false;
  @Input() set idLaptop(id: number | string){
    this.id = "id_laptop_"+ id
    console.log(this.id)
  };

  @Input()
  set changeUrl(newImg: string | undefined) {
    if (newImg) {
      this.urlImage = newImg;
    }

    // if (!this.animationExecuted) {
    //   this.manualSlideAnimation();
    //   this.animationExecuted = true;
    // }
  }

  changeId():string{
    return `url(#${this.id})`
  }

  // manualSlideAnimation() {
  //   gsap.fromTo(
  //     '.container-laptop-proyects',
  //     { opacity: 0 },
  //     { opacity: 1, duration: 1 }
  //   );
  // }
}
