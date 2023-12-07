import { Component, Input } from '@angular/core';
import { CardPost } from '@app/models/card-post.model';
import { postTypeData } from '@app/services/postTypePagination.service';

import { Pagination } from '@app/models/pagination.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  paged: number = 1
  currentPage: number = 1
  perPage: number = 6

  @Input() BlogPosts = []
  BlogPagination: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 6,
    totalItems: 0,
  }

  constructor(
    private postsList: postTypeData,
  ) { }

  getData(BlogPagination: Pagination) {
    this.postsList.getPostTypeData('post', BlogPagination.currentPage, BlogPagination.perPage).then(response => {
      this.BlogPosts = response.data.post
      this.BlogPagination = response.data.pagination
    })
  }

  ngOnInit(): void {
    this.getData(this.BlogPagination)
  }

}
