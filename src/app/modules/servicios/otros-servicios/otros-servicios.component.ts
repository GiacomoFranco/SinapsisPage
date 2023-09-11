import { Component, Input, AfterViewInit } from '@angular/core';
import { servicePageData } from '@app/models/servicePage.model';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-otros-servicios',
  templateUrl: './otros-servicios.component.html',
  styleUrls: ['./otros-servicios.component.scss']
})
export class OtrosServiciosComponent implements AfterViewInit {

  @Input() pageData: servicePageData;
  @Input() isMobile: boolean;

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  initScrollReveal() {
    const sr = ScrollReveal();

    sr.reveal('.scroll-left', {
      delay: 600,
      duration: 3000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-out',
    });

    sr.reveal('.scroll-right', {
      delay: 600,
      duration: 3000,
      origin: 'right',
      distance: '100px',
      easing: 'ease-out',
    });
  }
}
