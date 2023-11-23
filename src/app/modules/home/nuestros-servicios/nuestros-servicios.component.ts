import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Servicio } from '@app/models/servicio.model';
import { ServiciosService } from '@app/services/servicios.service';

@Component({
  selector: 'app-nuestros-servicios',
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.scss'],
})
export class NuestrosServiciosComponent implements OnInit {
  constructor(private servicioService: ServiciosService) {}

  isPendingServicios: boolean = true;
  servicios: Servicio[];
  isServiciosResponsive: Boolean;
  servicioItems: Servicio[] = [];
  @Input() dataOurService = {
    titulo_seccion: '',
    imagen: '',
    titulo_boton: ''
  }

  isMobile: Boolean;

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
    this.isServiciosResponsive = window.innerWidth < 600;
  }

  ngOnInit(): void {
    this.checkWindowSize();
    this.servicioService.getServicios().then((resp) => {
      this.servicios = resp.data;
      this.isPendingServicios = false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }
}
