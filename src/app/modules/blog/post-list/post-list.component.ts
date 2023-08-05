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
    slug:''
  }]

  constructor(
    private postsList: BlogPostService,
  ) { }

  ngOnInit(): void {
    this.postsList.getBlogPost().then(response => {
      this.BlogPosts = response.data
    })
  }

}
