import { Component } from '@angular/core';
import { CardPost } from '@app/models/card-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  postsArray: any[] = [1, 2, 3, 4, 5, 6];

  @Input() BlogPost: CardPost[] = [{
    featuredImg: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'Noticias',
    date: 'hace 3 días',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }]

  constructor(
    private CPTList: FaqServices,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.CPTList.getFAQ().then(response => {
      this.FAQs = response.data
    })
  }

  showAccordion(faq: FaqInterface) {
    this.FAQs.forEach(item => item.isActive = false);
    faq.isActive = true;
  }

}
