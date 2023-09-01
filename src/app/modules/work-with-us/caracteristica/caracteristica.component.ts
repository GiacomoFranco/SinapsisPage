import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.scss'],
})
export class CaracteristicaComponent {
  @Input() text: String;
  @Input() icon: String;
  @Input() title: String;
  @Input() isContacto: Boolean;
}
