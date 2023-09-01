import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent {
  @Input() title: String = 'Lorem ipsum';
  @Input() isContacto: Boolean;
}
