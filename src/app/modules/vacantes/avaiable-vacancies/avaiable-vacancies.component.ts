import { Component, OnInit } from '@angular/core';
import { VacantesService } from '@app/services/vacantes.service';
import { Router } from '@angular/router';
import { CellClickEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-avaiable-vacancies',
  templateUrl: './avaiable-vacancies.component.html',
  styleUrls: ['./avaiable-vacancies.component.scss'],
})
export class AvaiableVacanciesComponent implements OnInit {
  constructor(
    private vacantesService: VacantesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vacantesService.getVacancies().then((resp) => {
      this.allVacancies = resp.data.post;
      this.vacancies = resp.data.post;
      this.mapTechnologies(this.vacancies);
    });

    this.vacantesService.getAreas().then((resp) => {
      this.areas = resp.data;
      this.areasName = this.areas.map((area: any) => area.name);
    });

    this.vacantesService.getTecnologias().then((resp) => {
      this.tecnologias = resp.data;
      this.tecnologiasName = this.tecnologias.map((area: any) => area.name);
    });
  }

  vacancies: any[];
  allVacancies: any[];

  areas: any[];
  tecnologias: any[];
  areasName: string[];
  tecnologiasName: string[];
  search: any = '';
  filters: {
    area: string | null;
    tecnologia: string | null;
    search: string;
  } = { area: null, tecnologia: null, search: '' };

  gridUserSelectionChange(selection: CellClickEvent) {
    const selectedRow = selection.dataItem.slug;
    this.router.navigate([
      'trabaja-con-nosotros/vacantes/vacante',
      selectedRow,
    ]);
  }

  filterVacancies(filterValue: string, input: any) {
    // Tipamos los posibles campos desde donde se ejecuta la función accediendo desde el id del template

    const filterField: 'areas' | 'tecnologias' | 'nombre' = input.hostElement ? input.hostElement.nativeElement.id : input.focusableId;

    // Validamos que las opciones elegidas en los campos no sean los campos por default
    if (filterValue === 'Área' || filterValue === 'Tecnología') {
      switch (filterField) {
        case 'areas':
          this.filters.area = null;
          break;

        case 'tecnologias':
          this.filters.tecnologia = null;
          break;
      }

    } else {
      let selectedValueSlug;

      if (filterField !== 'nombre') {
        // Buscamos el slug de los dropdowns para poder realizar la consulta
        selectedValueSlug = this[filterField].find(
          (filter: any) => filter.name === filterValue
        ).slug;
      }

      switch (filterField) {
        case 'areas':
          this.filters.area = selectedValueSlug;
          break;

        case 'tecnologias':
          this.filters.tecnologia = selectedValueSlug;
          break;

        case 'nombre':
          this.filters.search = this.search;
          break;
      }
    }

    // Realizamos la consulta con el objeto filters
    this.vacantesService.getVacancies(this.filters).then((resp) => {
      this.vacancies = resp.data.post;
      this.mapTechnologies(this.vacancies);
    });
  }

  mapTechnologies(vacanciesToMap: any) {
    vacanciesToMap.forEach((vacancy: any) => {
      vacancy['tecnología'] = vacancy['tecnología']
        .map((technology: any) => technology.name)
        .join(', ');
    });
  }
}
