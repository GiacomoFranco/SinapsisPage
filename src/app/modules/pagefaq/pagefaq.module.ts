import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagefaqComponent } from './page/pagefaq.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PagefaqComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagefaqModule { }
