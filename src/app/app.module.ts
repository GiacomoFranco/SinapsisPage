import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { PortafolioDetailModule } from './modules/portafolio-detail/portafolio-detail.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    BlogsingleModule,
    PortafolioDetailModule,
    GridModule,
    InputsModule,
    DropDownsModule,
    IndicatorsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
