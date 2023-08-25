import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanteDetailComponent } from './page/vacante-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { WorkWithUsModule } from '../work-with-us/work-with-us.module';

const routes: Routes = [{ path: 'vacante', component: VacanteDetailComponent }];

@NgModule({
    declarations: [
        VacanteDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        WorkWithUsModule,
    ]
})
export class VacanteDetailModule { }
