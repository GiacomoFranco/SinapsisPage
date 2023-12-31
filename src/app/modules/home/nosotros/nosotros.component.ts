import { Component, Input, OnInit } from '@angular/core';
import { SliderAbout } from '@app/models/sliderUs.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { sliderUsData } from 'src/app/core/sliderUs.mock';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
  sliderImg: SliderAbout[] = sliderUsData;
  supTitle = '';

  @Input() dataUs = {
    title: '',
    description: '',
    UrlMainBtn: '',
    UrlSecondBtn: '',
    gallery: []
  }

  usOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    nav: false,
    pullDrag: false,
    margin: 5,
    autoplay: true,
    items: 1,
    autoplayTimeout: 5,
    autoHeight: false,
    dots: false,
    responsive: {
      900: {
        items: 3,
      },
      620: {
        items: 2,
      },
    },
  };

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    this.supTitle = language === 'es' ? 'Nosotros' : 'About Us'
  }
}
