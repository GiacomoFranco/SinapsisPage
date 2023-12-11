import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { PaginationComponent } from './pagination/pagination.component';
import { ProjectMobileComponent } from './project-mobile/project-mobile.component';
import { PagerModule } from "@progress/kendo-angular-pager";
import { NuestrasTecnologiasComponent } from './nuestras-tecnologias/nuestras-tecnologias.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { ParallaxDirective } from './directives/parallax.directive';
import { RequiredValidator } from './directives/required.directive';
import { ModalStateComponent } from './modal-state/modal-state.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { LinkSinapsisComponent } from './link-sinapsis/link-sinapsis.component';
import { ServicesMobileComponent } from './services-mobile/services-mobile.component';
import { ModalPoliticasComponent } from './modal-politicas/modal-politicas.component';

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
    InternalProjectComponent,
    PaginationComponent,
    ProjectMobileComponent,
    NuestrasTecnologiasComponent,
    ScrollRevealDirective,
    ParallaxDirective,
    RequiredValidator,
    ModalStateComponent,
    LoadingOverlayComponent,
    LinkSinapsisComponent,
    ServicesMobileComponent,
    ModalPoliticasComponent,
  ],
  imports: [CommonModule, RouterModule, PagerModule, CarouselModule],
  exports: [
    headerComponent,
    ButtonSinapsisComponent,
    CasosDeExitoComponent,
    TecnologiasComponent,
    FooterComponent,
    FaqComponent,
    ProyectLaptopComponent,
    ProjectMobileComponent,
    RouterModule,
    RedesSocialesComponent,
    CardPostComponent,
    LogoComponent,
    NavmenuComponent,
    LangSelectorComponent,
    ArrowBackComponent,
    PaginationComponent,
    NuestrasTecnologiasComponent,
    ScrollRevealDirective,
    ParallaxDirective,
    ModalStateComponent,
    LoadingOverlayComponent,
    LinkSinapsisComponent,
    ServicesMobileComponent,
    ModalPoliticasComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
