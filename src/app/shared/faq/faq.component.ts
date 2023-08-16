import { Component, Input, ViewContainerRef, HostListener  } from '@angular/core';
import { FaqInterface } from '@app/models/faq.model';
import { FaqServices } from '@app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  isScrolled: boolean = false;
  activateAccordion: boolean = false;

  @Input() FAQs: FaqInterface[] = [{
    id: 0,
    title: '',
    date: '',
    content: '',
    isActive:  false
  }]

  @Input() numbers:number = 4;

  constructor(
    private CPTList: FaqServices,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.CPTList.getFAQ().then(response => {
      this.FAQs = response.data
    })

  }

  showAccordion(faq: FaqInterface) {
    this.FAQs.forEach(item => item.isActive = false);
    faq.isActive = true;
  }

  /** Animation event */
  detectScroll():void {

    const getFAQAccordion = document.documentElement.querySelector('.c-faq')
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    this.detectScroll()
  }

}
