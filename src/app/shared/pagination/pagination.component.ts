import { Component, Input } from '@angular/core';
import { Pagination } from '@app/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {

  @Input() PaginationData: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 1,
    totalItems: 1,
  }

  NumberPrePage = this.PaginationData.currentPage ? this.PaginationData.currentPage - 1 : 0
  NumbernextPage = this.PaginationData.currentPage ? this.PaginationData.currentPage + 1 : 2

  goBack() {
    console.log(this.PaginationData)
  }

  ngOnInit(): void {
    this.goBack()
  }


}
