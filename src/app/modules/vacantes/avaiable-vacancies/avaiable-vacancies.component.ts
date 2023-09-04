import { Component, OnInit } from '@angular/core';
import VacanciesMock from '@app/core/vacancies.mock';
import { VacantesService } from '@app/services/vacantes.service';
import { filterBy } from '@progress/kendo-data-query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaiable-vacancies',
  templateUrl: './avaiable-vacancies.component.html',
  styleUrls: ['./avaiable-vacancies.component.scss'],
})
export class AvaiableVacanciesComponent implements OnInit {
  constructor(private vacantesService: VacantesService, private router: Router) {}

  ngOnInit(): void {
    this.vacantesService.getVacancies().then((resp) => {
      console.log(resp.data.post);

      this.vacancies = resp.data.post;
      console.log(this.vacancies);

      this.vacanciesData = resp.data.post;

      this.rol = this.vacanciesData.map((offer: any) => offer.title);
      this.equipo = this.vacanciesData.map((offer: any) => offer.title);
      this.remoto = this.vacanciesData.map((offer: any) => offer.title);
      console.log(this.rol);
    });
  }

  vacancies: any[];
  vacanciesData: any[];
  rol: any;
  equipo: any;
  remoto: any;

  gridUserSelectionChange(gridUser:any, selection:any) {
    const selectedData = selection.dataItem.slug;
    this.router.navigate([
      'trabaja-con-nosotros/vacantes/vacante',
      selectedData,
    ]);

  }

  public applyFilter(value: string): void {
    console.log(value);

    this.vacancies = filterBy(VacanciesMock, {
      logic: 'and',
      filters: [
        {
          field: 'rol',
          operator: 'contains',
          value: value,
          ignoreCase: true,
        },
        {
          field: 'equipo',
          operator: 'contains',
          value: '',
          ignoreCase: true,
        },
        {
          field: 'remoto',
          operator: 'contains',
          value: '',
          ignoreCase: true,
        },
      ],
    });
  }
}
