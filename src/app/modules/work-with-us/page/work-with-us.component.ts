import { trigger } from '@angular/animations';
import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent implements AfterViewInit, OnDestroy {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  bannerAnimation: GSAPAnimation | null;
  infoTextAnimation: GSAPAnimation | null;
  caracteristicasCardAnimation: GSAPAnimation | null;
  parallaxAnimation: GSAPAnimation | null;
  beneficiosAnimation: GSAPAnimation | null;
  beneficioCardAnimation: GSAPAnimation | null;
  caracteristicasTitleAnimation: GSAPAnimation | null;

  initializeAnimations() {
    this.bannerAnimation = gsap.from('.banner-a', {
      x: '-50%',
      ease: 'expo',
      duration: 2,
      opacity: 0,
      stagger: 0.3,
    });

    this.infoTextAnimation = gsap.from('.info-a', {
      y: '50px',
      ease: 'expo',
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.info-text',
        start: 'top 70%',
      },
    });

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

    this.beneficiosAnimation = gsap.from('.beneficios__content-a', {
      y: '50%',
      ease: 'expo',
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.beneficios__content',
        start: '-50% 70%',
      },
    });

    this.beneficioCardAnimation = gsap.from('.beneficios__perk', {
      y: '50%',
      ease: 'expo',
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.beneficios__content',
        start: '-50% 70%',
      },
    });

    this.caracteristicasTitleAnimation = gsap.from(
      '.caracteristicas__title-a',
      {
        y: '50%',
        ease: 'expo',
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.caracteristicas-a',
          start: '-50% 70%',
        },
      }
    );

    this.caracteristicasCardAnimation = gsap.from('.caracteristicas__card', {
      y: '100%',
      ease: 'expo',
      duration: 1,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'center',
      },
      id: 'caracteristica',
      scrollTrigger: {
        trigger: '.caracterticas__cards',
        start: '-50% 70%',
      },
    });
  }

  killAnimations() {
    this.infoTextAnimation!.kill();
    this.bannerAnimation!.kill();
    this.caracteristicasCardAnimation!.kill();
    this.parallaxAnimation!.kill();
    this.beneficiosAnimation!.kill();
    this.caracteristicasTitleAnimation!.kill();
    this.bannerAnimation = null;
    this.caracteristicasCardAnimation = null;
    this.parallaxAnimation = null;
    this.beneficiosAnimation = null;
    this.caracteristicasTitleAnimation = null;
    this.infoTextAnimation = null;
  }

  ngAfterViewInit(): void {
    this.initializeAnimations();

    setTimeout(() => ScrollTrigger.refresh(), 0);
  }

  ngOnDestroy(): void {
    this.killAnimations();
  }
}
