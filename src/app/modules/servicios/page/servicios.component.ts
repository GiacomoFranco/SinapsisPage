import { Component, AfterViewInit, OnInit, HostListener, ElementRef } from '@angular/core';
import sliderData from 'src/app/core/slider.mock';
import { Slider } from 'src/app/models/slide.model';
import Swiper from 'swiper';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import ScrollReveal from 'scrollreveal';
import Lottie from 'lottie-web';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements AfterViewInit, OnInit {

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

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    
    this.sliderItems = sliderData;

    // const animationOptions: AnimationOptions = {
    //   path: '/assets/Animation/animation_pc.json',
    //   autoplay: true,
    //   renderer: "svg",
    //   loop: false
    // };
    // this.options = animationOptions;

    this.animation = Lottie.loadAnimation({
      container: this.elementRef.nativeElement.querySelector(this.container_id),
      renderer: 'svg',
      path: '/assets/Animation/animation_pc.json',
      autoplay: false,
      loop: true
    })
    this.handleScroll()
    this.checkWindowSize();

    const sr = ScrollReveal();

    sr.reveal('.scroll-reveal-statistics', {
      duration: 3000,
      origin: 'left',
      distance: '100px',
      delay: 400,
      easing: 'ease-out'
    });
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
      speed: 10000,
    });
    this.swiper.autoplay.start()
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 600;
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


  @HostListener("scroll", [])
  handleScroll(){
    if(this.elementInView()){
      this.animation.play()
    }else{
      this.animation.pause()
    }
  }

  @HostListener("scroll", ['$event'])
  onScrollMethod($event:Event){
    console.log('Scrollsito')
  }
}
