import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '@app/models/pagination.model';
import { PageChangeEvent, PagerType } from '@progress/kendo-angular-pager';

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
    totalItems: 1,
  }

  ngOnInit(): void {
    //console.log(this.PaginationData)
  }

  skip = 0;
  type: PagerType = 'numeric'
  info = false

  onPageChange(e: PageChangeEvent): void {
    let copyPaginationData = { ...this.PaginationData }

    this.skip = e.skip;
    copyPaginationData.perPage = e.take;
    copyPaginationData.currentPage = Math.ceil(
      ((this.skip)/(e.take))+1
    );

    this.updateData.emit(copyPaginationData)

  }

  @Output() updateData = new EventEmitter<Pagination>();

}
