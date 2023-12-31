import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GetPageDataService } from '@app/services/get-page-data.service';
import { WorkWithUsPage } from '@app/models/workWithUs.model';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent implements AfterViewInit, OnDestroy, OnInit {

  constructor(private seoService: SeoService,
    private getPagaDataService: GetPageDataService,
  ) { }

  pageWorkWithUs: WorkWithUsPage;

  parallaxAnimation: GSAPAnimation | null;

  initialRender = false;

  initializeAnimations() {
    this.parallaxAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.beneficios',
          start: '-20% 70%',
          scrub: true,
          id: 'parallax',
        },
      })
      .fromTo('.employee', { top: -50, scale: 1 }, { top: 100, scale: 0.9 });
  }

  killAnimations() {
    this.parallaxAnimation!.kill();
    this.parallaxAnimation = null;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.initialRender = true
    }, 1000);
    this.FlagsSEO();
    this.getPageData();
  }

  private getPageData(){
    this.getPagaDataService.getServicesPage('trabaja-con-nosotros').then(resp => {
      const {data} = resp;
      this.pageWorkWithUs = data;
      console.log(this.pageWorkWithUs)
    })
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Trabaja con nosotros',
      description:
        '¿Buscas una oportunidad emocionante en el mundo de la tecnología? Únete a Sinapsis y forma parte de nuestro equipo apasionado. Descubre cómo puedes contribuir a la innovación y la excelencia tecnológica mientras construyes tu carrera con nosotros.',
      keywords:
        'trabaja con nosotros, empleo en Sinapsis, oportunidades de trabajo en tecnología, carreras en desarrollo de software, innovación tecnológica, excelencia tecnológica, empleo en tecnología',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }

  ngAfterViewInit(): void {
    this.initializeAnimations();

    setTimeout(() => ScrollTrigger.refresh(), 0);
  }

  ngOnDestroy(): void {
    this.killAnimations();
  }
}
