import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { NosotrosModule } from './modules/nosotros/nosotros.module';

import { PagefaqModule } from './modules/pagefaq/pagefaq.module';

import { SharedModule } from './shared/shared.module';
import { PortafolioModule } from './modules/portafolio/portafolio.module';
import { PagerModule } from '@progress/kendo-angular-pager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkWithUsModule } from './modules/work-with-us/work-with-us.module';
import { BlogModule } from './modules/blog/blog.module';
import { BlogsingleModule } from './modules/blogsingle/blogsingle.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ServiciosModule,
    NosotrosModule,
    PagefaqModule,
    SharedModule,
    HttpClientModule,
    PortafolioModule,
    PagerModule,
    BrowserAnimationsModule,
    WorkWithUsModule,
    BlogModule,
    BlogsingleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
