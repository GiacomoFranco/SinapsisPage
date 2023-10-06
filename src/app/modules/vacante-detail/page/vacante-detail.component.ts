import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { VacantesService } from '@app/services/vacantes.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-vacante-detail',
  templateUrl: './vacante-detail.component.html',
  styleUrls: ['./vacante-detail.component.scss'],
})
export class VacanteDetailComponent implements OnInit {
  constructor(
    private vacantesService: VacantesService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.vacantesService.getVacancy(slug).then((res) => {
      this.vacancyDetail = res.data;
      this.isPendingVacancyDetail = false;
      // Al agregar en la clase la propiedad visibility: hidden en conjunto de la siguiente linea de código podremos evitar el blink al usar GSAP
      gsap.from('.vacante__container', { autoAlpha: 0 });
      this.FlagsSEO();
    });
  }

  modalState: boolean = false;
  modalError: string | undefined;
  updateModalState(event: string | undefined = undefined){
    this.modalState = !this.modalState
    if (event) {
      this.modalError = event
    } else {
      this.modalError = undefined;
    }
  }

  isPendingVacancyDetail: boolean = true;
  vacancyDetail: any;

  applyModalState: boolean = false;

  toggleModalState(toggledModal: boolean | undefined = undefined): void {
    this.applyModalState = !this.applyModalState;

    if (toggledModal === undefined) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: this.vacancyDetail.title ?? 'Vacante',
      description: this.vacancyDetail?.DescritpionOfferTitle ?? 'Encuentra tu próximo desafío profesional en Sinapsis y sé parte de nuestro equipo dedicado a la innovación y la excelencia tecnológica',
      keywords:
        'nuestras vacantes, oportunidades de empleo, trabajos en tecnología, carreras tecnológicas, empleos en desarrollo de software, innovación tecnológica, excelencia tecnológica',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }
}
