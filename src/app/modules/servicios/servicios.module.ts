import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './page/servicios.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import {register} from 'swiper/element/bundle';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { AnimacionPortatilComponent } from './animacion-portatil/animacion-portatil.component';
import { OtrosServiciosComponent } from './otros-servicios/otros-servicios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

export function playerFactory() {
  return player;
}

// register();

@NgModule({
  declarations: [
    ServiciosComponent,
    SliderComponent,
    AnimacionPortatilComponent,
    OtrosServiciosComponent,
    EstadisticasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    LottieModule.forRoot({player: playerFactory}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiciosModule { }
