import { Component, AfterViewInit, OnInit, HostListener, ElementRef  } from '@angular/core';
import sliderData from 'src/app/core/slider.mock';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
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

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    this.sliderItems = sliderData;
    const animationOptions: AnimationOptions = {
      path: '/assets/Animation/animation_pc.json',
      autoplay: false,
      renderer: "svg"
    };
    this.options = animationOptions;
    this.checkWindowSize();
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      loop: true,
      autoplay: {
        delay: 10,
        disableOnInteraction: false
      },
      breakpoints: {
        1200: {
          slidesPerView: 5
        },
        1000: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 2
        }
      },
      speed: 3000,
    });
    this.swiper.autoplay.start()
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 600;
  }

  animationCreated(animationItem: AnimationItem): void {
  }
}
