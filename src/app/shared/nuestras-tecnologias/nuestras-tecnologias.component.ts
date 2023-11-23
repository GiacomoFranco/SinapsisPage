import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tecnologies } from '@app/core/tecnologias.mock';
import { Tecnologias } from '@app/models/tecnologias.model';
import { TecnologiesService } from '@app/services/tecnologies.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-nuestras-tecnologias',
  templateUrl: './nuestras-tecnologias.component.html',
  styleUrls: ['./nuestras-tecnologias.component.scss']
})
export class NuestrasTecnologiasComponent implements OnInit, AfterViewInit{

  dataTecnologies: Tecnologias

  tecnoImg: string[] = [];
  
  constructor(private tecnologiesService: TecnologiesService){}
  
  ngOnInit(): void {
    this.tecnoImg = Tecnologies;
    this.getData();
  }
  
  ngAfterViewInit(): void {
    this.animationTec()
  }

  getData(){
    this.tecnologiesService.getDataTecnologias().then(resp => {
      const {data} = resp;
      this.dataTecnologies = data;
      console.log(this.dataTecnologies)
    })
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
