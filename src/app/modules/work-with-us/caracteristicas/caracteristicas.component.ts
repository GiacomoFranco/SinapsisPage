import { Component, Input, ViewChild } from '@angular/core';
import { Advantages } from '@app/models/workWithUs.model';

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
    officeUbication: string;
    social_network: string;
    profile: string;
    url_profile: string;
  }

  @Input() characteristics : Advantages[];
  @Input() nameButton: string;
}
