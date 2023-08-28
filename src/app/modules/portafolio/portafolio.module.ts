import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './page/portafolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagerModule } from "@progress/kendo-angular-pager";
import { AppRoutingModule } from '@app/app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    PortafolioComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagerModule,
    AppRoutingModule,
    CarouselModule
  ]
})
export class PortafolioModule { }
