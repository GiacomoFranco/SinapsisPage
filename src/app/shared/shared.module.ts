import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonSinapsisComponent } from './button-sinapsis/button-sinapsis.component';
import { CasosDeExitoComponent } from './casos-de-exito/casos-de-exito.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { ProyectLaptopComponent } from './proyect-laptop/proyect-laptop.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { CardPostComponent } from './card-post/card-post.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavmenuComponent } from './header/navmenu/navmenu.component';
import { LangSelectorComponent } from './header/lang-selector/lang-selector.component';
import { ArrowBackComponent } from './arrow-back/arrow-back.component';
import { InternalProjectComponent } from './internal-project/internal-project.component';
import { BlogModule } from '@app/modules/blog/blog.module';
import { PostcarrouselComponent } from '@app/modules/blog/postcarrousel/postcarrousel.component';

@NgModule({
  declarations: [
    headerComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent,
    ProyectLaptopComponent,
    RedesSocialesComponent,
    CardPostComponent,
    LogoComponent,
    NavmenuComponent,
    LangSelectorComponent,
    ArrowBackComponent,
    InternalProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    headerComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent,
    ProyectLaptopComponent,
    RouterModule,
    RedesSocialesComponent,
    CardPostComponent,
    LogoComponent,
    NavmenuComponent,
    LangSelectorComponent,
    ArrowBackComponent,
  ],
})
export class SharedModule { }
