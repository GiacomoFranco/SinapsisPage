import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';
import { SharedModule } from 'src/app/shared/shared.module';

import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';


register()
@NgModule({
  declarations: [
    NosotrosComponent,
    CarruselComponent,
    TimelineComponent,
    MisionVisionComponent,
    IntegrantesComponent
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
