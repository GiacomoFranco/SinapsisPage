import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './page/faq.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    FaqPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FAQModule { }
