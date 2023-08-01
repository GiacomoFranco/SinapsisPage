import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';

import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { CarouselModule } from 'ngx-owl-carousel-o';


register()
@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    CarouselModule
  ]
})
export class NosotrosModule { }
