import { Component, OnInit } from '@angular/core';
import { IntegranteModel } from '@app/models/integrante.model';
import { NosotrosService } from '@app/services/nosotros.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit{

  integrantesData: IntegranteModel[] = [];

  constructor(private nosotrosService: NosotrosService){}

  ngOnInit(): void {
    this.getIntegrantes();
  }

  getIntegrantes() {
    this.nosotrosService.getIntegrantes().then((response) => {
      const { data } = response;
      this.integrantesData = data
    })
  }
}
