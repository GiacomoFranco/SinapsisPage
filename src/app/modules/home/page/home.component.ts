import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, DoCheck, HostListener, OnDestroy } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { SliderAbout } from '@app/models/sliderUs.model';
import { ServiciosService } from '@app/services/servicios.service';
import { ProyectosService } from '@app/services/proyectos.service';
import { sliderUsData } from 'src/app/core/sliderUs.mock';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Proyecto } from '@app/models/proyect.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimoniosService } from '@app/services/testimonios.service';
import { Testimonio } from '@app/models/testimonio.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, DoCheck, OnDestroy {
  constructor(
    private renderer2: Renderer2,
    private servicioService: ServiciosService,
    private proyectosService: ProyectosService,
    private testimoniosService: TestimoniosService
  ) {
  }


  @ViewChild('laptop') laptop: ElementRef<HTMLElement>;
  @ViewChild('absoluteLaptop') absoluteLaptop: ElementRef<HTMLElement>;
  @ViewChild('relativeLaptop') relativeLaptop: ElementRef<HTMLElement>;

  animation: GSAPAnimation | null;
  bannerAnimations(): void {
    const state = Flip.getState(this.laptop.nativeElement);

    this.renderer2.appendChild(
      this.relativeLaptop.nativeElement,
      this.laptop.nativeElement
    );

    const flip = Flip.from(state, {
      scale: true,
      absolute: true,
      duration: 3,
      ease: 'power3',
    });

    this.animation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.banner-principal',
          pin: '.banner-principal',
          start: '1px top',
          end: '+=100% 20%',
          scrub: true,
          id: 'eda',
        },
      })
      .add(flip)
      .fromTo(
        '.phone-graphic',
        {
          x: '-200',
          opacity: 0,
          zIndex: 9,
          duration: 1.2,
        },
        { x: 0, opacity: 1, zIndex: 21 }
      )
      .from('.section__text-container', {
        y: 200,
        opacity: 0,
        duration: 2,
      });
  }

  servicios: Servicio[];
  isServiciosResponsive: Boolean;
  servicioItems: Servicio[] = [];

  sliderImg: SliderAbout[] = sliderUsData;
  usOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: false,
    pullDrag: false,
    margin: 5,
    autoplay: true,
    items: 1,
    autoplayTimeout: 5,
    autoHeight: false,
    dots: false,
    responsive: {
      900: {
        items: 3,
      },
      620: {
        items: 2,
      },
    },
  };
  manualSlideAnimation() {
    gsap.fromTo(
      '.proyect-content',
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }

  isWWUResponsive: Boolean;
  isMobile: Boolean;
  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
    this.isServiciosResponsive = window.innerWidth < 600;
    this.isWWUResponsive = window.innerWidth < 1025;
  }

  projects: Proyecto[];
  lenghtprojects: number;
  project: Proyecto;
  projectBefore: Proyecto;
  projectCicle: any;
  selectProyect(i: number) {
    this.project = this.projects[i];
    this.restartProjectInterval();
  }
  isSlideActive(i: number): boolean {
    let proyectIndex = this.projects.indexOf(this.project);
    return proyectIndex === i;
  }
  setProjectsInterval() {
    this.projectCicle = setInterval(() => {
      let indexOfProject = this.projects.indexOf(this.project);

      if (indexOfProject + 1 < this.lenghtprojects) {
        this.project = this.projects[indexOfProject + 1];
      } else {
        this.project = this.projects[0];
      }
    }, 5000);
  }
  stopProjectsInterval() {
    clearInterval(this.projectCicle);
  }
  restartProjectInterval() {
    this.stopProjectsInterval();
    this.setProjectsInterval();
  }

  testimonios: Testimonio[];
  testimonyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: false,
    pullDrag: false,
    margin: 20,
    autoplay: true,
    items: 1,
    autoplayTimeout: 10,
    dots: true,
    responsive: {
      1146: {
        items: 3,
      },
      746: {
        items: 2,
      },
    },
  };
  starsLogic(score: Number | String): number[] {
    let stars: number[] = [];
    let parsedScore = Number(score);
    let totalStars = Math.ceil(parsedScore);
    for (let index = 0; index < totalStars; index++) {
      if (parsedScore < 1) {
        stars[index] = Number(parsedScore.toFixed(2));
      } else {
        stars[index] = 1;
        parsedScore--;
      }
    }
    return stars;
  }
  starClipped(decimal: number): string {
    let operation = 20 * decimal;
    return operation.toString();
  }

  ngDoCheck(): void {
    if (this.project !== this.projectBefore) {
      this.projectBefore = this.project;
      this.manualSlideAnimation();
    }
  }

  ngOnInit(): void {
    this.checkWindowSize();
    this.servicioService
      .getServicios()
      .then((resp) => (this.servicios = resp.data));

    this.proyectosService.getProductosDestacados().then((resp) => {
      this.projects = resp.data;
      this.project = this.projects[1];
      this.projectBefore = this.project;
      this.lenghtprojects = this.projects.length;
      this.setProjectsInterval();
    });

    this.testimoniosService
      .getTestimonios()
      .then((resp) => (this.testimonios = resp.data));
  }

  ngAfterViewInit(): void {
    this.bannerAnimations()

    setTimeout(() => ScrollTrigger.refresh(), 1);
  }

  ngOnDestroy(): void {
    this.animation!.kill()
    this.animation = null;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }
}
