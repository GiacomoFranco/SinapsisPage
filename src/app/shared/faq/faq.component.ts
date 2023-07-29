import { Component, Input } from '@angular/core';
import { FaqInterface } from '@app/models/faq-model';
import { FaqServices } from '@app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  @Input() FAQs: FaqInterface[] = [{
    id: 0,
    title: '',
    date: '',
    content: ''
  }]

  constructor(
    private CPTList: FaqServices,
  ) { }

  ngOnInit(): void {
    this.CPTList.getFAQ().then(response => {
      this.FAQs = response.data
    })
  }

}
