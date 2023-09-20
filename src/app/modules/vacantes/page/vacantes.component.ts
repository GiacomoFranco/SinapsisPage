import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.scss'],
})
export class VacantesComponent implements OnInit{
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.FlagsSEO();
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Nuestras Vacantes',
      description:
        'Encuentra tu próximo desafío profesional en Sinapsis y sé parte de nuestro equipo dedicado a la innovación y la excelencia tecnológica',
      keywords:
        'nuestras vacantes, oportunidades de empleo, trabajos en tecnología, carreras tecnológicas, empleos en desarrollo de software, innovación tecnológica, excelencia tecnológica',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }
}
