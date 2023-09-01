import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { Router } from '@angular/router';
import { PortafolioService } from '@app/services/portafolio.service';
import { portafolioModel } from '@app/models/portafolio.model';
import { Pagination } from '@app/models/pagination.model';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, DoCheck {
  dataPage: portafolioModel[] = []
  dataPagination: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 6,
    totalItems: 0,
  }
  grouped: any[] = []
  skip = 0;
  pageSize = 6;
  pagedChases: any[] = [];
  pagedChasescpy: any[] = this.dataPage;
  total = this.dataPagination.totalItems;
  contentId = 'cards-cont';
  isMobile = false;

  constructor(private router: Router, private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.pageData(this.dataPagination);
    this.validateResponsive()
  }

  ngDoCheck(): void {
    if (this.dataPage !== this.pagedChasescpy) {
      this.grouped = []
      this.pagedChasescpy = this.dataPage;
      for (let i = 0; i < this.dataPage.length; i += 3) {
        this.grouped.push(this.dataPage.slice(i, i + 3));
      }
    }
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.dataPagination.perPage = e.take;
    this.dataPagination.currentPage = Math.ceil(
      ((this.skip) / (e.take)) + 1
    );
    this.pageData(this.dataPagination)
  }

  private pageData(pagination: Pagination): void {
    console.log('antes de iniciar: ', pagination.currentPage)
    this.portafolioService.getPagePortafolio(pagination.currentPage, this.pageSize).then(resp => {
      const { data } = resp;
      this.dataPage = data.post
      this.dataPagination = data.pagination
      this.pagedChases = this.dataPage.slice(this.skip, this.skip + this.pageSize);
      console.log(this.dataPage)
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.validateResponsive();
  }

  validateResponsive() {
    this.isMobile = window.innerWidth < 767;
  }

  redirect(slug: string) {
    this.router.navigate([`portafolio/${slug}`])
  }
}
