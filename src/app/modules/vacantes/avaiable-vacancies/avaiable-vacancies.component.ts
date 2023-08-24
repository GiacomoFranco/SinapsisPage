import { Component, OnInit } from '@angular/core';
import VacanciesMock from '@app/core/vacancies.mock';
import { filterBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-avaiable-vacancies',
  templateUrl: './avaiable-vacancies.component.html',
  styleUrls: ['./avaiable-vacancies.component.scss'],
})
export class AvaiableVacanciesComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.rol);
  }

  vacancies = VacanciesMock;
  rol = VacanciesMock.map((offer) => offer.rol);
  equipo = VacanciesMock.map((offer) => offer.equipo)
  remoto = VacanciesMock.map((offer) => offer.remoto)


  public applyFilter(value: string): void {
    console.log(value);

    this.vacancies = filterBy(VacanciesMock, {
      logic: 'and',
      filters: [
        {
          field: 'rol',
          operator: 'contains',
          value: value,
          ignoreCase: true
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
