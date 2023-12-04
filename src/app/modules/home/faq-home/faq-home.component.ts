import { Component, Input, OnInit } from '@angular/core';
import { FaqInterface } from '@app/models/faq.model';
import { FaqServices } from '@app/services/faq.service';

@Component({
  selector: 'app-faq-home',
  templateUrl: './faq-home.component.html',
  styleUrls: ['./faq-home.component.scss']
})
export class FaqHomeComponent implements OnInit {
  @Input() tituloPreguntas = '';
  featuredFaq: FaqInterface[];

  constructor(private faqService: FaqServices){}

  ngOnInit(): void {
    this.getFeaturedQuestions();
  }

  async getFeaturedQuestions(){
    await this.faqService.getFeaturedFAQ().then(resp => {
      const {data} = resp;
      this.featuredFaq = data;
    })
  }
}
