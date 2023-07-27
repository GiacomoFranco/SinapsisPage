import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
import ScrollReveal from 'scrollreveal';
import Lottie from 'lottie-web';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements AfterViewInit, OnInit {

  sliderItems: Slider[] = []
  options: AnimationOptions = {
    path: '/assets/Animation/animation_pc.json',
  };

  isAnimationPlaying = true;
  isMobile = false;


  animationItem: AnimationItem | undefined;

  swiper: Swiper | undefined;

  private animation: AnimationItem | any
  width = 1200
  height = 800
  container_id = '#lotti-container'

  constructor(private elementRef: ElementRef, private service: ServiciosService) { }

  ngOnInit(): void {
    const animationOptions: AnimationOptions = {
      path: '/assets/Animation/animation_pc.json',
      autoplay: true,
      renderer: "svg",
      loop: false
    };
    this.options = animationOptions;

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
    // this.animation = Lottie.loadAnimation({
    //   container: this.elementRef.nativeElement.querySelector(this.container_id),
    //   renderer: 'svg',
    //   path: '/assets/Animation/animation_pc.json',
    //   autoplay: false,
    //   loop: true
    // })
    // this.handleScroll()
  }

  ngAfterViewInit(): void {

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

  animationCreated(animationItem: AnimationItem): void {

  }

  private elementInView() {
    const rec = this.elementRef.nativeElement.getBoundingClientRect();
    return (
      rec.top >= 0 &&
      rec.left >= 0 &&
      rec.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rec.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  @HostListener("scroll", [])
  handleScroll() {
    if (this.elementInView()) {
      this.animation.play()
    } else {
      this.animation.pause()
    }
  }
}
