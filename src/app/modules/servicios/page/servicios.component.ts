import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
import ScrollReveal from 'scrollreveal';
import Lottie from 'lottie-web';
import { ServiciosService } from 'src/app/services/servicios.service';
import sliderData from 'src/app/core/slider.mock';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements  OnInit {

  sliderItems: Slider[] = []
  // options: AnimationOptions = {
  //   path: '/assets/Animation/animation_pc.json',
  // };

  isAnimationPlaying = true;
  isMobile = false;


  animationItem: AnimationItem | undefined;

  swiper: Swiper | undefined;

  private animation: AnimationItem | any
  width = 1200
  height = 800
  container_id = '#lotti-container'

  constructor(private elementRef: ElementRef, private service: ServiciosService){}

  ngOnInit(): void {
    // const animationOptions: AnimationOptions = {
    //   path: '/assets/Animation/animation_pc.json',
    //   autoplay: true,
    //   renderer: "svg",
    //   loop: false
    // };
    // this.options = animationOptions;

    this.service.getServicios().then((resp) => {
      const {data} = resp;
      this.sliderItems = data
      this.initSwiper();
    })

    this.initSwiper();

    this.animation = Lottie.loadAnimation({
      container: this.elementRef.nativeElement.querySelector(this.container_id),
      renderer: 'svg',
      path: '/assets/Animation/animation_pc.json',
      autoplay: false,
      loop: true
    })
    this.handleScroll()

    const sr = ScrollReveal();
    sr.reveal('.scroll-reveal-statistics', {
      duration: 3000,
      origin: 'left',
      distance: '100px',
      delay: 400,
      easing: 'ease-out'
    });

    this.checkWindowSize();
  }

  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      loop:true,
      slidesPerView: 5,
      autoplay: {
        delay: 10,
        disableOnInteraction: false
      },
      breakpoints: {
        1200: {
          slidesPerView: 5
        },
        600: {
          slidesPerView: 3
        }
      },
      speed: 10000,
    });
    this.swiper.autoplay.start()
  }

  animationCreated(animationItem: AnimationItem): void {

  }

  private elementInView(){
    const rec = this.elementRef.nativeElement.getBoundingClientRect();
    return (
      rec.top >= 0 && 
      rec.left >= 0 &&
      rec.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rec.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  @HostListener("scroll", [])
  handleScroll(){
    if(this.elementInView()){
      this.animation.play()
    }else{
      this.animation.pause()
    }
  }
}
