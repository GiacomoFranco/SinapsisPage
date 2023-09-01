import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { ServiciosService } from 'src/app/services/servicios.service';
import { servicePageData } from '@app/models/servicePage.model';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  pageData: servicePageData = {
    developSoftware: {
      title: '',
      description: '',
      secondDescription: ''
    },
    phoneSection: {
      title: '',
      description: '',
      urlBoton: ''
    },
    laptopSection: {
      title: '',
      description: '',
      urlBoton: ''
    },
    sectionStadistics: [],
    SectionWorkWithUs: {
      Title: '',
      urlBoton: ''
    },
  };

  constructor(private service: ServiciosService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.getPage();
    this.FlagsSeo();
  }

  getPage() {
    this.service.getServicesPage().then((resp) => {
      const { data } = resp;
      this.pageData = data;
    });
  }

  FlagsSeo() {
    this.seoService.generateFlags({
      title: 'Servicios de Desarrollo de Software',
      description: 'Nuestros servicios de desarrollo de software personalizados están diseñados para satisfacer las necesidades únicas de tu negocio. Ofrecemos soluciones de software de alta calidad para impulsar la eficiencia y la innovación.',
      keywords: 'servicios de desarrollo de software, desarrollo de aplicaciones, soluciones de software, desarrollo personalizado, programación a medida, desarrollo de software a medida',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/servicios',
    })
  }
}
