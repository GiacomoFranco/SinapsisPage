import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacantesService } from '@app/services/vacantes.service';

@Component({
  selector: 'app-vacante-detail',
  templateUrl: './vacante-detail.component.html',
  styleUrls: ['./vacante-detail.component.scss'],
})
export class VacanteDetailComponent implements OnInit {

  constructor(
    private vacantesService: VacantesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.vacantesService.getVacancy(slug).then((res) => {
      this.vacancyDetail = res.data;
      this.isPendingVacancyDetail = false;
    });
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
}
