import { Component, OnInit } from '@angular/core';
import { NosotrosService } from '@app/services/nosotros.service';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

export class NosotrosComponent implements OnInit {
  img_workout = "/assets/img/tablet.png"
  pageData: nosotrosPage = {
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
  isMobile = false;

  constructor(private nosotrosService: NosotrosService) {
  }

  ngOnInit(): void {
    this.getData();
    this.checkWindowSize();
  }

  async getData(){
    try {
      this.nosotrosService.getNosotrosPage().then((response) => {
        const { data } = response
        this.pageData = data;
      })
    } catch (error) {
      console.error(error)
    }
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

}
