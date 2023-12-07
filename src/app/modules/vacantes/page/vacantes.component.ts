import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';
import { GetPageDataService } from '@app/services/get-page-data.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.scss'],
})
export class VacantesComponent implements OnInit {
  constructor(private seoService: SeoService,
    private getPagaDataService: GetPageDataService,
  ) { }

  title_section: string;

  ngOnInit(): void {
    this.FlagsSEO();
    this.getDataPage();
  }

  private getDataPage(){
    this.getPagaDataService.getServicesPage('vacantes').then(resp => {
      const {data} = resp;
      this.title_section = data.titulo;
    })
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
