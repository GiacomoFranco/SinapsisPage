import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, DoCheck, HostListener, OnDestroy } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { SliderAbout } from '@app/models/sliderUs.model';
import { ServiciosService } from '@app/services/servicios.service';
import { ProyectosService } from '@app/services/proyectos.service';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Proyecto } from '@app/models/proyect.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimoniosService } from '@app/services/testimonios.service';
import { Testimonio } from '@app/models/testimonio.model';
import { SeoService } from '@app/services/seo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(
    private seoService: SeoService,
    private renderer2: Renderer2,
    private proyectosService: ProyectosService,
    private testimoniosService: TestimoniosService
  ) {}

  @ViewChild('laptop') laptop: ElementRef<HTMLElement>;
  @ViewChild('absoluteLaptop') absoluteLaptop: ElementRef<HTMLElement>;
  @ViewChild('relativeLaptop') relativeLaptop: ElementRef<HTMLElement>;

  animations() {
    const serviciosTitleAnimation = gsap.from('.nuestros-servicios__title', {
      x: '-50%',
      opacity: 0,
      ease: 'expo',
      duration: 2,
      scrollTrigger: {
        trigger: '.nuestros-servicios',
        start: 'top 70%',
      },
    });

    const teamAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.nuestros-servicios__title',
          start: '-100% 70%',
          end: '500% top',
          scrub: true,
          id: 'parallax',
        },
      })
      .fromTo('.team-work', { top: -50, scale: 1.3 }, { top: 150, scale: 1 });
  }

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
          end: '+=200% 20%',
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
          duration: 10,
        },
        { x: 0, opacity: 1, zIndex: 21 }
      )
      .from('.section__text-container', {
        y: 200,
        opacity: 0,
        duration: 2,
      });

    // this.animation.eventCallback('onComplete', () => {
    //   gsap.to('.banner-principal', {
    //     scrollTrigger: {
    //       trigger: '.banner-principal',
    //       start: 'top bottom', // Fija el elemento cuando su parte superior toca la parte inferior de la ventana
    //       end: '+=500', // Permanece fijado durante 500 unidades de desplazamiento hacia abajo
    //       pin: true, // "Fija" el elemento en la pantalla
    //       pinSpacing: false, // No agrega espaciado extra después de que el elemento se "fija"
    //       markers: true, // (opcional) Muestra marcadores de ScrollTrigger para depuración
    //     },
    //   });
    // });
  }

  isWWUResponsive: Boolean;
  isMobile: Boolean;
  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
    this.isWWUResponsive = window.innerWidth < 1025;
  }

  isPendingProjects: boolean = true;
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

  ngOnInit(): void {
    this.checkWindowSize();

    this.proyectosService.getProductosDestacados().then((resp) => {
      this.projects = resp.data;
      this.project = this.projects[1];
      this.projectBefore = this.project;
      this.lenghtprojects = this.projects.length;
      this.setProjectsInterval();
      this.isPendingProjects = false;
    });

    this.FlagsSEO();
  }

  ngAfterViewInit(): void {
    this.bannerAnimations();
    this.animations();

    setTimeout(() => ScrollTrigger.refresh(), 1);
  }

  ngOnDestroy(): void {
    this.animation!.kill();
    this.animation = null;
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Sinapsis',
      description:
        'En Sinapsis, estamos en la vanguardia de la tecnología. Descubre cómo nuestro equipo de expertos en desarrollo de software está transformando el futuro con soluciones tecnológicas innovadoras. Únete a nosotros en este viaje hacia la excelencia tecnológica.',
      keywords:
        'Sinapsis, tecnología vanguardia, equipo expertos desarrollo software, soluciones tecnológicas innovadoras, transformación tecnológica, excelencia tecnológica, innovación en desarrollo de software, futuro tecnológico, viaje hacia la excelencia, unirse a Sinapsis, equipo Sinapsis',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }
}
