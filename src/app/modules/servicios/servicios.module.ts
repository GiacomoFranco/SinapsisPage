import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './page/servicios.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ServiciosModule { }
