import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioDetailComponent } from './page/portafolio-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { TecnologiasPortafolioComponent } from './tecnologias-portafolio/tecnologias-portafolio.component';
import { SectionMobileComponent } from './section-mobile/section-mobile.component';


@NgModule({
  declarations: [
    PortafolioDetailComponent,
    TecnologiasPortafolioComponent,
    SectionMobileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class PortafolioDetailModule { }
