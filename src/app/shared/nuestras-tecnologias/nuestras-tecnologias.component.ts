import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tecnologias } from '@app/core/tecnologias.mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-nuestras-tecnologias',
  templateUrl: './nuestras-tecnologias.component.html',
  styleUrls: ['./nuestras-tecnologias.component.scss']
})
export class NuestrasTecnologiasComponent implements OnInit, AfterViewInit{
  tecnoImg: string[] = [];
  
  
  ngOnInit(): void {
    this.tecnoImg = Tecnologias;
  }
  
  ngAfterViewInit(): void {
    this.animationTec()
  }
  
  refrescarAnim(){
    ScrollTrigger.refresh();
  }
  
  animationTec(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".animacion-nuestras-tecnologias", {
      scale: 1.2,
      duration: 5,
      scrollTrigger: {
        trigger: '.animacion-nuestras-tecnologias',
        start: 'top center',
      }
    });
  }
}
