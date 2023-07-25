import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonSinapsisComponent } from './button-sinapsis/button-sinapsis.component';
import { CasosDeExitoComponent } from './casos-de-exito/casos-de-exito.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent
  ]
})
export class SharedModule { }
