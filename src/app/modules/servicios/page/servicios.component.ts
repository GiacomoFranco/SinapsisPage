import { Component, OnInit, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
import ScrollReveal from 'scrollreveal';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StadisticsModel } from '@app/models/stadistics.model';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements AfterViewInit, OnInit {

  sliderItems: Slider[] = []
  stadisticsData: StadisticsModel[] = []

  isAnimationPlaying = true;
  isMobile = false;

  
  swiper: Swiper | undefined;
  
  private animation: AnimationItem | any;
  
  options: AnimationOptions = {
    path: '/assets/Animation/animation_pc.json',
    autoplay: false
  };
  animationItem: any;

  @ViewChild('lottiContainer', { static: true }) lottiContainer!: ElementRef<HTMLDivElement>;

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {

    this.service.getServicios().then((resp) => {
      const { data } = resp;
      this.sliderItems = data
      this.swiper = new Swiper('.swiper-initialized', {
        loop: true,
        slidesPerView: 5,
        autoplay: {
          delay: 10,
          disableOnInteraction: false
        },
        speed: 2000,
        breakpoints: {
          1200: {
            slidesPerView: 5
          },
          767: {
            slidesPerView: 3
          }
        },
      });
    })
    this.initScrollReveal();
    this.checkWindowSize();
    this.getStadistics();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      const lottieElement = this.lottiContainer.nativeElement;
      const animation = this.animationItem;
      let animationProgress = 0;

      function updateAnimationProgress() {
        if (animation) {
          animation.goToAndStop(animation.totalFrames * animationProgress, true);
        }
      }

      gsap.to(animation, {
        time: animation.totalFrames / animation.frameRate,
        repeat: -1,
        ease: "ease",
      })

      ScrollTrigger.create({
        trigger: lottieElement,
        pin: '.content-animation',
        start: 'top 50px',
        end: () => `+=${lottieElement.clientHeight}`,
        scrub: true,
        onUpdate: self => {
          animationProgress = self.progress;
          if (animationProgress === 0) {
            animationProgress = 1; // Establecerlo en el último frame de la animación
          }
          updateAnimationProgress();
        }
      });

      updateAnimationProgress();
    }, 1000);
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  initScrollReveal() {
    const sr = ScrollReveal();
    sr.reveal('.scroll-left', {
      delay: 600,
      duration: 5000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-out'
    });

    sr.reveal('.scroll-software', {
      duration: 4000,
      origin: 'bottom',
      distance: '100px',
      delay: 600,
      easing: 'ease-out'
    });

    sr.reveal('.scroll-right', {
      delay: 600,
      duration: 4000,
      origin: 'right',
      distance: '100px',
      easing: 'ease-out'
    });
  }

  getStadistics(){
    this.service.getStadistics().then(response =>{
      const {data} = response
      this.stadisticsData = data.sectionStadistics;
    })
  }
}
