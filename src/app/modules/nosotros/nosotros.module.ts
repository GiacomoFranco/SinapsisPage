import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './page/nosotros.component';
import {register} from 'swiper/element/bundle';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { WorkoutComponent } from './workout/workout.component';
import { PagerModule } from "@progress/kendo-angular-pager";


register()
@NgModule({
  declarations: [
    NosotrosComponent,
    CarruselComponent,
    TimelineComponent,
    MisionVisionComponent,
    IntegrantesComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    PagerModule
  ]
})
export class NosotrosModule { }
