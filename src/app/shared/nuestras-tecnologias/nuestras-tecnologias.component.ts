import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tecnologias } from '@app/models/tecnologias.model';
import { TecnologiesService } from '@app/services/tecnologies.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-nuestras-tecnologias',
  templateUrl: './nuestras-tecnologias.component.html',
  styleUrls: ['./nuestras-tecnologias.component.scss']
})
export class NuestrasTecnologiasComponent implements OnInit, AfterViewInit {

  dataTecnologies: Tecnologias

  constructor(private tecnologiesService: TecnologiesService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.animationTec()
  }

  getData() {
    this.tecnologiesService.getDataTecnologias().then(resp => {
      const { data } = resp;
      this.dataTecnologies = data;
    })
  }

  animationTec() {
    gsap.to(".content-items", {
      scale: 1.2,
      duration: 5,
      scrollTrigger: {
        trigger: '.animacion-nuestras-tecnologias',
        start: 'top center',
        markers: true
      },
      stagger: {
        amount: 1.4,
        from: "start",
      },
    });
  }
}
