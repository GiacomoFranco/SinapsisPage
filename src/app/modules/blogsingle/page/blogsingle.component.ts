import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogSingleInterface } from '@app/models/blogsingle.model';
import { BlogSingleService } from '@app/services/blogSingle.service';

@Component({
  selector: 'app-blogsingle',
  templateUrl: './blogsingle.component.html',
  styleUrls: ['./blogsingle.component.scss', '../../../../assets/extra-styles/gutembergstyle.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlogsingleComponent{
  slug: string;
  constructor(
    private route: ActivatedRoute,
    private singleBlog:BlogSingleService
  ) { }

  @Input() single: BlogSingleInterface = {
    id: 0,
    title: '',
    categories: '',
    date: '',
    thumbnail: '',
    slug: '',
    content: ''
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });

    this.singleBlog.getBlogSingleService(this.slug).then(response => {
      this.single = response.data
    })
  }

}
