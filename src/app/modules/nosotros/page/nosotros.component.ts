import { Component, OnInit } from '@angular/core';
import { NosotrosService } from '@app/services/nosotros.service';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SeoService } from '@app/services/seo.service';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

export class NosotrosComponent implements OnInit {
  img_workout = "/assets/img/tablet.png"
  pageData: nosotrosPage;
  isMobile = false;

  constructor(private nosotrosService: NosotrosService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.getData();
    this.checkWindowSize();
    this.FlagsSEO();
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

  FlagsSEO(){
    this.seoService.generateFlags({
      title: 'Acerca de Nosotros',
      description: 'Descubre quiénes somos en Sinapsis. Somos un equipo de expertos en desarrollo de software comprometidos con la entrega de soluciones tecnológicas de vanguardia. Conoce nuestra historia, valores y visión de innovación.',
      keywords: 'nosotros, equipo de desarrollo de software, empresa de tecnología, expertos en desarrollo de software, historia de la empresa, visión y valores, innovación tecnológica',
      site_name: 'Sinapsis Innovation',
      image: '',
      slug_url: '/nosotros',
    })
  }
}
