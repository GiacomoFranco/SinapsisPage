import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './page/contactanos.component';
import { WorkWithUsModule } from '../work-with-us/work-with-us.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ContactanosComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkWithUsModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    LabelModule,
    TextBoxModule,
    InputsModule,
  ],
})
export class ContactanosModule {}
