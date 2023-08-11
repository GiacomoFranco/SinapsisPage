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

import { InternalProjectComponent } from './shared/internal-project/internal-project.component';

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
    path: 'portafolio', component: PortafolioComponent
  },
  { path: "bancolombia", component: InternalProjectComponent },
  {
    path: 'faq',
    component: PagefaqComponent
  },
  {
    path: 'trabaja-con-nosotros',
    component: WorkWithUsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:slug',
    component: BlogsingleComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
