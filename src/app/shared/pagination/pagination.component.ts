import { Component, Input } from '@angular/core';
import { Pagination } from '@app/models/pagination.model';
import { PageChangeEvent } from '@progress/kendo-angular-pager';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {

  @Input() PaginationData: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 12,
    totalItems: 100,
  }

  ngOnInit(): void {
    console.log(this.PaginationData)
  }

  skip = 0;

  onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.PaginationData.perPage = e.take;
  }

}
