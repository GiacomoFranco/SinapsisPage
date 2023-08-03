import { Component, Input, OnInit } from '@angular/core';
import { CardPost } from '@app/models/card-post.model';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() postInfo: CardPost = {
    featuredImg: '',
    slug:'',
    categories: '',
    date: '',
    title: '',
    excerpt: '',
  }

}
