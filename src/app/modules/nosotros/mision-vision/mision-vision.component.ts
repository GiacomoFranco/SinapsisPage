import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.scss']
})
export class MisionVisionComponent implements OnInit, AfterViewInit{
  @Input() pageData: nosotrosPage = {
    gallery: [],
    ourHistory: {
      imagen: '',
      title: '',
      description: ''
    },
    timeLine: {
      description: '',
      data: []
    },
    misionVision: [],
    sectionDesign: {
      imagen: '',
      title: '',
      descripcion: '',
      UrlBtn: ''
    }
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.animateMisionVision();
  }

  animateMisionVision() {
    gsap.registerPlugin(ScrollTrigger);

   
    gsap.from(".mision-vision-row", {
      x: "100%",
      ease: 'expo',
      duration: 5,
      scrollTrigger: {
        trigger: '.mision-vision-row',
        start: this.getScreen(),
        end: '+=200% center',
      }
    });

  }

  getScreen():string{
    let size = '';
    if (window.innerWidth > 1024) {
      size = 'center 0';
    }
    if (window.innerWidth <= 1024) {
      size = '-400px top';
    }
    return size;
  }
}
