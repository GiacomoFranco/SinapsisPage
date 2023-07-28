import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonSinapsisComponent } from './button-sinapsis/button-sinapsis.component';
import { CasosDeExitoComponent } from './casos-de-exito/casos-de-exito.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent
  ]
})
export class SharedModule { }
