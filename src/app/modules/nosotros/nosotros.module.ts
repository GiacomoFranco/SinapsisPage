import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';
import { SharedModule } from 'src/app/shared/shared.module';

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
    CarouselModule,
    SharedModule
  ]
})
export class NosotrosModule { }
