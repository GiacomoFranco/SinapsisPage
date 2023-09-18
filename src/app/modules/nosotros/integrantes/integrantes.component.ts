import { Component, OnInit } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { IntegranteModel } from '@app/models/integrante.model';
import { Pagination } from '@app/models/pagination.model';
import { NosotrosService } from '@app/services/nosotros.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit{

  integrantesData: IntegranteModel[] = [];
  dataPagination: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 7,
    totalItems: 0,
  }
  skip = 0;

  constructor(private nosotrosService: NosotrosService){}

  ngOnInit(): void {
    this.pageData(this.dataPagination);
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.dataPagination.perPage = e.take;
    this.dataPagination.currentPage = Math.ceil(
      ((this.skip) / (e.take)) + 1
    );
    this.pageData(this.dataPagination)
  }

  pageData(pagination: Pagination){
    this.nosotrosService.getIntegrantes(pagination.currentPage, pagination.perPage).then((response) => {
      const { data } = response;
      this.integrantesData = data.post
      this.dataPagination = data.pagination
    })
  }
}
