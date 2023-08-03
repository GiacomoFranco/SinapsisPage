import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonSinapsisComponent } from './button-sinapsis/button-sinapsis.component';
import { CasosDeExitoComponent } from './casos-de-exito/casos-de-exito.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { ProyectLaptopComponent } from './proyect-laptop/proyect-laptop.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { CardPostComponent } from './card-post/card-post.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent,
    ProyectLaptopComponent,
    RedesSocialesComponent,
    CardPostComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent,
    ProyectLaptopComponent,
    RouterModule,
    RedesSocialesComponent,
    CardPostComponent
  ],
})
export class SharedModule {}
