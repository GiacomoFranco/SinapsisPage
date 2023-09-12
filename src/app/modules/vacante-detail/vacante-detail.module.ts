import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanteDetailComponent } from './page/vacante-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { WorkWithUsModule } from '../work-with-us/work-with-us.module';
import { ApplyComponent } from './apply/apply.component';
import { FormFieldModule, InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadsModule } from '@progress/kendo-angular-upload';


const routes: Routes = [{ path: 'vacante:slug', component: VacanteDetailComponent }];

@NgModule({
  declarations: [VacanteDetailComponent, ApplyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    WorkWithUsModule,
    FormFieldModule,
    LabelModule,
    TextBoxModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    UploadsModule,
    InputsModule,
  ],
})
export class VacanteDetailModule {}
