import { Component, Input, ViewContainerRef  } from '@angular/core';
import { FaqInterface } from '@app/models/faq.model';
import { FaqServices } from '@app/services/faq.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

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

}
