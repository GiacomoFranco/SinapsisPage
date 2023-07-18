import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonSinapsisComponent } from './button-sinapsis/button-sinapsis.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonSinapsisComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ButtonSinapsisComponent
  ]
})
export class SharedModule { }
