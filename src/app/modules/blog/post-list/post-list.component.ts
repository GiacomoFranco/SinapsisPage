import { Component, Input } from '@angular/core';
import { CardPost } from '@app/models/card-post.model';
import { BlogPostService } from '@app/services/blogpost.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() BlogPosts: CardPost[] = [{
    featuredImg: '',
    categories: '',
    date: '',
    title: '',
    excerpt: '',
    slug: '',
    totalPages:1
  }]

  paged:number = 1
  perPage:number = 6

  constructor(
    private postsList: BlogPostService,
  ) { }

  getPostData() {
    this.postsList.getBlogPost(this.paged, this.perPage).then(response => {
      this.BlogPosts = response.data
    })
  }

  ngOnInit(): void {
    this.getPostData()
  }

  nextPaged() {
    this.paged += 1
    this.getPostData()
  }

  prevPaged() {
    this.paged -= 1
    this.getPostData()
  }

}
