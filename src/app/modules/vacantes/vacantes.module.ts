import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesComponent } from './page/vacantes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { GridModule } from '@progress/kendo-angular-grid';
import { AvaiableVacanciesComponent } from './avaiable-vacancies/avaiable-vacancies.component';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'vacantes', component: VacantesComponent }
];



@NgModule({
  declarations: [VacantesComponent, AvaiableVacanciesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    GridModule,
    TextBoxModule,
    ButtonsModule,
    DropDownsModule,
    FormsModule
  ],
})
export class VacantesModule {}
