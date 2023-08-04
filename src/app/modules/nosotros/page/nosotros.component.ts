import { Component, OnInit } from '@angular/core';
import { sliderUsData } from 'src/app/core/sliderUs.mock';
import { SliderAbout } from 'src/app/models/sliderUs.model';
import Swiper from 'swiper';
import ScrollReveal from 'scrollreveal';
import { TimelineModel } from 'src/app/models/timeline.model';
import { TimelineData } from 'src/app/core/timeline.mock';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IntegranteModel } from '@app/models/integrante.model';
import { NosotrosService } from '@app/services/nosotros.service';
import { nosotrosPage } from '@app/models/nosotrosPage.model';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

export class NosotrosComponent implements OnInit {
  sliderImg: SliderAbout[] = []
  swiper: Swiper | undefined;
  timelineItems: TimelineModel[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 10,
    dots: false,
    navSpeed: 10,
    autoplaySpeed: 10000,
    responsive: {
      1024: {
        items: 3
      },
      767: {
        items: 2
      }
    }
  };
  isMobile = false;
  timelineType = 'horizontal'
  positionTimeline = 'top'

  img_workout = "/assets/img/tablet.png"

  integrantesData: IntegranteModel[] = [];

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

  constructor(private nosotrosService: NosotrosService) {
  }

  ngOnInit(): void {
    this.timelineItems = TimelineData
    this.sliderImg = sliderUsData

    this.getIntegrantes();
    this.initScrollReveal();
    this.checkWindowSize();
    this.timelineResponsive();
    this.getPageData();
  }

  getPageData(){
    this.nosotrosService.getNosotrosPage().then((response) =>{
      const {data} = response
      this.pageData = data;
    })
  }

  getIntegrantes(){
    this.nosotrosService.getIntegrantes().then((response) => {
      const {data} = response;
      this.integrantesData = data
    })
  }

  initScrollReveal(){
    const sr = ScrollReveal();
    sr.reveal('.history', {
      delay: 500,
      duration: 4000,
      origin: 'left',
      distance: '200px',
      easing: 'ease-out',
    });

    sr.reveal('.row-left', {
      delay: 400,
      duration: 2500,
      origin: 'left',
      distance: '500px',
      easing: 'ease',
    });

    sr.reveal('.row-right', {
      delay: 400,
      duration: 2500,
      origin: 'rigth',
      distance: '500px',
      easing: 'ease',
    });
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

  timelineResponsive(){
    if(window.innerWidth <= 1024){
      this.timelineType = 'vertical';
      this.positionTimeline = 'alternate'
      this.pageData.sectionDesign.imagen = '/assets/img/tablet1.png'
    }
  }
}
