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
import { DelayGuard } from './shared/delay.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [DelayGuard],
    data: { title: 'Inicio' },
    title: 'Inicio',
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    canActivate: [DelayGuard],
    data: { title: 'Servicios' },
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: { title: 'Nosotros' },
    canActivate: [DelayGuard],
  },
  {
    path: 'portafolio',
    component: PortafolioComponent,
    data: { title: 'Portafolio' },
    canActivate: [DelayGuard],
  },
  {
    path: 'bancolombia',
    component: InternalProjectComponent,
    canActivate: [DelayGuard],
  },
  {
    path: 'faq',
    component: PagefaqComponent,
    canActivate: [DelayGuard],
    data: { title: 'FAQ' },
    title: 'FAQ',
  },
  {
    path: 'trabaja-con-nosotros',
    component: WorkWithUsComponent,
    canActivate: [DelayGuard],
    data: { title: 'Trabaja con nosotros' },
  },
  {
    path: 'trabaja-con-nosotros/vacantes',
    component: VacantesComponent,
    canActivate: [DelayGuard],
    data: { title: 'Vacantes' },
    loadChildren: () =>
      import('./modules/vacantes/vacantes.module').then(
        (m) => m.VacantesModule
      ),
  },
  {
    path: 'trabaja-con-nosotros/vacantes/vacante/:slug',
    component: VacanteDetailComponent,
    canActivate: [DelayGuard],
    loadChildren: () =>
      import('./modules/vacante-detail/vacante-detail.module').then(
        (m) => m.VacanteDetailModule
      ),
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [DelayGuard],
  },
  {
    path: 'blog/:slug',
    component: BlogsingleComponent,
    canActivate: [DelayGuard],
  },
  {
    path: 'portafolio/:slug',
    component: PortafolioDetailComponent,
    canActivate: [DelayGuard],
  },
  {
    path: 'contacto',
    component: ContactanosComponent,
    loadChildren: () =>
      import('./modules/contactanos/contactanos.module').then(
        (m) => m.ContactanosModule
      ),
    canActivate: [DelayGuard],
    data: { title: 'Contacto' },
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
