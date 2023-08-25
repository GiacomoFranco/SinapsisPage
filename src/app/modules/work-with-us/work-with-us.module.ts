import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkWithUsComponent } from './page/work-with-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CaracteristicaComponent } from './caracteristica/caracteristica.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { PerksComponent } from './perks/perks.component';
import { PerkComponent } from './perk/perk.component';

@NgModule({
  declarations: [
    WorkWithUsComponent,
    CaracteristicaComponent,
    CaracteristicasComponent,
    PerksComponent,
    PerkComponent,
  ],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PerksComponent],
})
export class WorkWithUsModule {}
