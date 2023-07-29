import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';
import { ServiciosComponent } from './modules/servicios/page/servicios.component';
import { NosotrosComponent } from './modules/nosotros/page/nosotros.component';
import { PortafolioComponent } from './modules/portafolio/page/portafolio.component';
import { FaqPageComponent } from './modules/faq/page/faq.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'faq',
    component: FaqPageComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
