import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';
import { ServiciosComponent } from './modules/servicios/page/servicios.component';
import { NosotrosComponent } from './modules/nosotros/page/nosotros.component';
import { PortafolioComponent } from './modules/portafolio/page/portafolio.component';
import { PagefaqComponent } from './modules/pagefaq/page/pagefaq.component';
import { WorkWithUsComponent } from './modules/work-with-us/page/work-with-us.component';
import { BlogComponent } from './modules/blog/page/blog.component';
import { BlogsingleComponent } from './modules/blogsingle/page/blogsingle.component';
import { PortafolioDetailComponent } from './modules/portafolio-detail/page/portafolio-detail.component';

import { InternalProjectComponent } from './shared/internal-project/internal-project.component';
import { VacantesComponent } from './modules/vacantes/page/vacantes.component';
import { VacanteDetailComponent } from './modules/vacante-detail/page/vacante-detail.component';
import { ContactanosComponent } from './modules/contactanos/page/contactanos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'portafolio',
    component: PortafolioComponent,
  },
  { path: 'bancolombia', component: InternalProjectComponent },
  {
    path: 'faq',
    component: PagefaqComponent,
  },
  {
    path: 'trabaja-con-nosotros',
    component: WorkWithUsComponent,
  },
  {
    path: 'trabaja-con-nosotros/vacantes',
    component: VacantesComponent,
    loadChildren: () =>
      import('./modules/vacantes/vacantes.module').then(
        (m) => m.VacantesModule
      ),
  },
  {
    path: 'trabaja-con-nosotros/vacantes/vacante',
    component: VacanteDetailComponent,
    loadChildren: () =>
      import('./modules/vacante-detail/vacante-detail.module').then(
        (m) => m.VacanteDetailModule
      ),
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:slug',
    component: BlogsingleComponent,
  },
  {
    path: 'portafolio/:slug',
    component: PortafolioDetailComponent,
  },
  {
    path: 'contacto',
    component: ContactanosComponent,
    loadChildren: () =>
      import('./modules/contactanos/contactanos.module').then(
        (m) => m.ContactanosModule
      ),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
