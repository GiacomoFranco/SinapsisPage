import { Component, OnInit } from '@angular/core';
import { FaqInterface } from '@app/models/faq.model';
import { FaqServices } from '@app/services/faq.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-pagefaq',
  templateUrl: './pagefaq.component.html',
  styleUrls: ['./pagefaq.component.scss']
})
export class PagefaqComponent implements OnInit {

  questions: FaqInterface[]

  constructor(private seoService: SeoService, private faqServices: FaqServices) { }

  ngOnInit(): void {
    this.FlagsSEO();
    this.getQuestions();
  }

  async getQuestions() {
    await this.faqServices.getFAQ().then(resp => {
      const {data} = resp;
      this.questions = data;
    })
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Preguntas frecuentes',
      description:
        'En Sinapsis, estamos en la vanguardia de la tecnología. Descubre cómo nuestro equipo de expertos en desarrollo de software está transformando el futuro con soluciones tecnológicas innovadoras. Únete a nosotros en este viaje hacia la excelencia tecnológica.',
      keywords:
        'Preguntas frecuentes, FAQ, Respuestas, Solucionar dudas, Información',
      site_name: 'Sinapsis',
      image: 'www.google.com',
      slug_url: '/',
    });
  }
}
