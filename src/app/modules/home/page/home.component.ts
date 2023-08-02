import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, DoCheck } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { SliderAbout } from '@app/models/sliderUs.model';
import { ServiciosService } from '@app/services/servicios.service';
import { ProyectosService } from '@app/services/proyectos.service';
import { sliderUsData } from 'src/app/core/sliderUs.mock';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Proyecto } from '@app/models/proyect.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimoniosService } from '@app/services/testimonios.service';
import { Testimonio } from '@app/models/testimonio.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, DoCheck {
  @ViewChild('laptop') laptop: ElementRef<HTMLElement>;
  @ViewChild('absoluteLaptop') absoluteLaptop: ElementRef<HTMLElement>;
  @ViewChild('relativeLaptop') relativeLaptop: ElementRef<HTMLElement>;

  servicios: Servicio[];
  sliderImg: SliderAbout[] = sliderUsData;
  swiper: Swiper;

  manualSlideAnimation() {
    gsap.fromTo(
      '.proyect-content',
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }

  constructor(
    private renderer2: Renderer2,
    private servicioService: ServiciosService,
    private proyectosService: ProyectosService,
    private testimoniosService: TestimoniosService
  ) {}

  projects: Proyecto[];
  project: Proyecto;
  projectBefore: Proyecto;

  testimonios: Testimonio[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: false,
    pullDrag: false,
    margin: 20,
    autoplay: true,
    items: 3,
    autoplayTimeout: 10,
    dots: true,
    // responsive: {
    //   1024: {
    //     items: 3,
    //   },
    //   767: {
    //     items: 3,
    //   },
    // },
  };

  ngDoCheck(): void {
    if (this.project !== this.projectBefore) {
      this.projectBefore = this.project;
      console.log('cambia');
      this.manualSlideAnimation();
    }
  }

  selectProyect(i: number) {
    this.project = this.projects[i];
  }

  isActive(i: number): boolean {
    let proyectIndex = this.projects.indexOf(this.project);
    return proyectIndex === i;
  }

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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.banner-principal',
          pin: '.banner-principal',
          start: '1px top',
          end: '+=100% 20%',
          // markers: true,
          scrub: true,
          id: 'eda',
        },
      })
      .add(flip)
      .from('.phone-graphic', {
        x: '-200',
        opacity: 0,
        duration: 0.9,
      })
      .from('.section__text-container', {
        y: 200,
        opacity: 0,
        duration: 2,
      });
  }

  ngOnInit(): void {
    this.servicioService
      .getServicios()
      .then((resp) => (this.servicios = resp.data));

    this.proyectosService.getProductosDestacados().then((resp) => {
      this.projects = resp.data;
      this.project = this.projects[1];
      this.projectBefore = this.project;
    });

    this.testimoniosService
      .getTestimonios()
      .then((resp) => (this.testimonios = resp.data));

    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    setInterval(() => {
      let lenghtprojects = this.projects.length;
      let indexOfProject = this.projects.indexOf(this.project);

      if (indexOfProject + 1 < lenghtprojects) {
        this.project = this.projects[indexOfProject + 1];
      } else {
        this.project = this.projects[0];
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(Flip, ScrollTrigger);

    this.bannerAnimations();
  }
}
