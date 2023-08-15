import { Component, Input, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardPost } from '@app/models/card-post.model';
import { BlogPostFeaturedService } from '@app/services/blogPostFeatured.service';

@Component({
  selector: 'app-postcarrousel',
  templateUrl: './postcarrousel.component.html',
  styleUrls: ['./postcarrousel.component.scss'],
})
export class PostcarrouselComponent {

  @Input()
  set setBreakpoint(breakpoint: number){
    this.customOptions.responsive![breakpoint].items = 3;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    margin: 55,
    autoplayTimeout: 10,
    items: 1,
    dots: true,
    navSpeed: 10,
    autoplaySpeed: 10000,
    responsive: {
      1400:{
        items: 2
      },
      870: {
        margin: 20,
        items: 2
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
