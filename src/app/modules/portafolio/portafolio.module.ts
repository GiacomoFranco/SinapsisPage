import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './page/portafolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagerModule } from "@progress/kendo-angular-pager";
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [
    PortafolioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagerModule,
    AppRoutingModule
  ]
})
export class PortafolioModule { }
