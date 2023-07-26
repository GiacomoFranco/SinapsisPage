import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';

register()
@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NosotrosModule { }
