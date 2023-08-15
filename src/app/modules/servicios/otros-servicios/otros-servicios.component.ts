import { Component, Input, HostListener, OnInit } from '@angular/core';
import { servicePageData } from '@app/models/servicePage.model';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-otros-servicios',
  templateUrl: './otros-servicios.component.html',
  styleUrls: ['./otros-servicios.component.scss']
})
export class OtrosServiciosComponent implements OnInit {

  @Input() pageData: servicePageData;
  isMobile = false;

  ngOnInit(): void {
    this.checkWindowSize();
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
