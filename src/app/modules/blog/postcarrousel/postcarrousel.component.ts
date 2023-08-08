import { Component, Input, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardPost } from '@app/models/card-post.model';
import { BlogPostFeaturedService } from '@app/services/blogPostFeatured.service';

@Component({
  selector: 'app-postcarrousel',
  templateUrl: './postcarrousel.component.html',
  styleUrls: ['./postcarrousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostcarrouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 10,
    dots: true,
    navSpeed: 10,
    autoplaySpeed: 10000,
    responsive: {
      1024: {
        items: 2
      },
      767: {
        items: 1
      }
    }
  };

  @Input() BlogPosts: CardPost[] = [{
    featuredImg: '',
    categories: '',
    date: '',
    title: '',
    excerpt: '',
    slug:''
  }]

  constructor(
    private postsList: BlogPostFeaturedService,
  ) { }

  ngOnInit(): void {
    this.postsList.getBlogPostFeatured().then(response => {
      this.BlogPosts = response.data
    })
  }
}
