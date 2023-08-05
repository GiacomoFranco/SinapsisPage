import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './page/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostcarrouselComponent } from './postcarrousel/postcarrousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostcarrouselComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ]
})
export class BlogModule { }
