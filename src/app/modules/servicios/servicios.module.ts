import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './page/servicios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {register} from 'swiper/element/bundle'

register();

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiciosModule { }
