import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogsingle',
  templateUrl: './blogsingle.component.html',
  styleUrls: ['./blogsingle.component.scss']
})
export class BlogsingleComponent{
  slug: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log(this.slug)
    });
  }

}
