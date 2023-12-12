import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  subTitle1 = '';
  subTitle2 = '';
  blogRoute = '';

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    this.subTitle1 = language === 'es' ? 'Explora' : 'Explore'
    this.subTitle2 = language === 'es' ? 'nuestro Blog' : 'Our Blog'
    this.blogRoute = language === 'es' ? 'Ir al Blog' : 'Go to Blog'
  }
}
