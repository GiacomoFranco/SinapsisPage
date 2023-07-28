import { Component, OnInit } from '@angular/core';
import { sliderUsData } from 'src/app/core/sliderUs.mock';
import { SliderAbout } from 'src/app/models/sliderUs.model';
import Swiper from 'swiper';
import ScrollReveal from 'scrollreveal';
import { TimelineModel } from 'src/app/models/timeline.model';
import { TimelineData } from 'src/app/core/timeline.mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  sliderImg: SliderAbout[] = []
  swiper: Swiper | undefined;
  timelineItems: TimelineModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.timelineItems = TimelineData
    
    this.sliderImg = sliderUsData
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
    });

    const sr = ScrollReveal();
    sr.reveal('.history', {
      delay: 600,
      duration: 4000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-out'
    });
  }
}
