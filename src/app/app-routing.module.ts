import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ServiciosComponent } from './modules/servicios/pages/servicios.component';

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
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
