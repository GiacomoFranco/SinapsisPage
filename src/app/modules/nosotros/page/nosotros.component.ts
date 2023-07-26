import { Component, OnInit } from '@angular/core';
import { sliderUsData } from 'src/app/core/sliderUs.mock';
import { SliderAbout } from 'src/app/models/sliderUs.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit{
  sliderImg: SliderAbout[] = []
  swiper: Swiper | undefined;

  ngOnInit(): void {
    this.sliderImg = sliderUsData
    this.swiper = new Swiper('.swiper-container', {
      loop:true,
      slidesPerView: 3,
    });
  }
}
