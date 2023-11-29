import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent {
  @Input() title: String = '';
  @Input() description: String = '';
  @Input() isContacto: Boolean;
  @Input() contact: {
    phone: string;
    city: string;
    adress: string;
    social_network: string;
    profile: string;
    url_profile: string;
  }
}
