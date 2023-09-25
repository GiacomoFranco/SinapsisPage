import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogModule } from '../blog/blog.module';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ProyectosDestacadosComponent } from './proyectos-destacados/proyectos-destacados.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { BlogComponent } from './blog/blog.component';
import { FaqHomeComponent } from './faq-home/faq-home.component';

@NgModule({
  declarations: [HomeComponent, NuestrosServiciosComponent, NosotrosComponent, WorkWithUsComponent, ProyectosDestacadosComponent, TestimoniosComponent, BlogComponent, FaqHomeComponent],
  imports: [CommonModule, SharedModule,CarouselModule, BlogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
