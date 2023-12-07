import { Component, Input } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';

@Component({
  selector: 'app-services-mobile',
  templateUrl: './services-mobile.component.html',
  styleUrls: ['./services-mobile.component.scss']
})
export class ServicesMobileComponent {

  @Input() servicios: Servicio[];
}
