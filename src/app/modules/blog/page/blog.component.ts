import { Component, Input } from '@angular/core';
import { CardPost } from '@app/models/card-post.model';
import { BlogPostService } from '@app/services/blogpost.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  postsArray: any[] = [1, 2, 3, 4, 5, 6];

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
      console.log(this.BlogPosts)
    })
  }


}
