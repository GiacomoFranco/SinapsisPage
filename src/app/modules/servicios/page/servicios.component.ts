import { Component, AfterViewInit } from '@angular/core';
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
export class ServiciosComponent implements AfterViewInit {

  sliderItems: Slider[] = []
  options: AnimationOptions = {
    path: '/assets/Animation/animation_pc.json',
  };
  isAnimationPlaying = true;

  animationItem: AnimationItem | undefined;

  isSmallScreen = false;
  isMediumScreen = false;
  isLargeScreen = false;
  swiper: Swiper | undefined;

  ngAfterViewInit(): void {
    this.sliderItems = sliderData;
    this.initSwiper();
    const animationOptions: AnimationOptions = {
      path: '/assets/Animation/animation_pc.json',
      autoplay: true
    };
    this.options = animationOptions;
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
        550: {
          slidesPerView: 2
        },
        100: {
          slidesPerView: 1
        }
      },
      speed: 3000,
    });
    this.swiper.autoplay.start()
  }

  animationCreated(animationItem: AnimationItem): void {
  }
}
