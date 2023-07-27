import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';

import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";


register()
@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule
  ]
})
export class NosotrosModule { }
