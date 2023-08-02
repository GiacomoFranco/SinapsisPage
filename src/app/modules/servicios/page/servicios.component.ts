import { Component, OnInit, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
import ScrollReveal from 'scrollreveal';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AnimationOptions } from 'ngx-lottie';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { servicePageData } from '@app/models/servicePage.model';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements AfterViewInit, OnInit {
  @ViewChild('lottiContainer', { static: true })
  lottiContainer!: ElementRef<HTMLDivElement>;

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
        items: 5,
      },
      767: {
        items: 3,
      },
    },
  };

  sliderItems: Servicio[] = [];

  pageData: servicePageData = {
    developSoftware: {
      title: '',
      description: '',
      secondDescription: '',
    },
    phoneSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    laptopSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    SectionWorkWithUs: {
      Title: '',
      urlBoton: '',
    },
    sectionStadistics: [],
  };

  isAnimationPlaying = true;
  isMobile = false;

  options: AnimationOptions = {
    path: '/assets/Animation/animation_pc.json',
    autoplay: false,
  };

  animationItem: any;

  contadores = [
    { target: 100, value: 0 },
    { target: 1000, value: 0 },
    { target: 300, value: 0 },
  ];

  constructor(private service: ServiciosService) {}

  ngOnInit(): void {
    this.getPage();
    this.getSlider();
    this.initScrollReveal();
    this.checkWindowSize();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      const lottieElement = this.lottiContainer.nativeElement;
      const animation = this.animationItem;
      let animationProgress = 0;
      let isScrollingUp = false;

      function updateAnimationProgress() {
        if (animation) {
          const frame = Math.floor(animation.totalFrames * animationProgress);
          animation.goToAndStop(frame, true);

          if (isScrollingUp && frame === 0) {
            animationProgress = 0;
            updateAnimationProgress();
          }
        }
      }

      ScrollTrigger.create({
        trigger: lottieElement,
        pin: '.content-animation',
        start: this.responsiveAnimation(),
        end: () => `+=${lottieElement.clientHeight}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= 0.99 && !isScrollingUp) {
            animationProgress = 179 / animation.totalFrames;
          } else {
            animationProgress = progress;
          }
          updateAnimationProgress();
        },
      });

      updateAnimationProgress();
    }, 1000);
  }

  responsiveAnimation(): string {
    let size = '';
    if (window.innerWidth > 1024) {
      size = '50px top';
    }
    if (window.innerWidth >= 767 && window.innerWidth <= 1024) {
      size = '-200px top';
    }
    if (window.innerWidth < 767) {
      size = '-400px top';
    }
    return size;
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  getPage() {
    this.service.getServicesPage().then((resp) => {
      const { data } = resp;
      this.pageData = data;
      this.pageData.sectionStadistics.forEach((element, i) => {
        this.contadores[i].target = Number(element.numbers);
      });
      setInterval(() => {
        this.contadores.forEach((counter) => {
          const increment = counter.target / 400;
          if (counter.value < counter.target) {
            counter.value = Math.ceil(counter.value + increment);
          } else {
            counter.value = counter.target;
          }
        });
      }, 0);
    });
  }

  getSlider() {
    this.service.getServicios().then((resp) => {
      const { data } = resp;
      this.sliderItems = data;
    });
  }

  initScrollReveal() {
    const sr = ScrollReveal();
    sr.reveal('.scroll-left', {
      delay: 600,
      duration: 5000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-out',
    });

    sr.reveal('.scroll-software', {
      duration: 4000,
      origin: 'bottom',
      distance: '100px',
      delay: 600,
      easing: 'ease-out',
    });

    sr.reveal('.scroll-right', {
      delay: 600,
      duration: 4000,
      origin: 'right',
      distance: '100px',
      easing: 'ease-out',
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }
}
