import { Component, Input, ViewContainerRef, HostListener } from '@angular/core';
import { FaqInterface } from '@app/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  isScrolled: boolean = false;
  activateAccordion: boolean = false;

  @Input() FAQs: FaqInterface[];

  @Input() numbers: number = 4;

  ngOnInit(): void {
    if (this.FAQs) {
      this.FAQs.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
    }
  }

  showAccordion(index: number) {
    this.FAQs.forEach((faq, i) => {
      if (i === index) {
        faq.isActive = !faq.isActive;
      } else {
        faq.isActive = false;
      }
    });
  }

  detectScroll(): void {
    const getFAQAccordion = document.documentElement.querySelector('.c-faq')
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    this.detectScroll()
  }

}
