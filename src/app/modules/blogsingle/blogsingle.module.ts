import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsingleComponent } from './page/blogsingle.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    BlogsingleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogsingleModule { }
