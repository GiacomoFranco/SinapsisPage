import { Component, Input } from '@angular/core';
import { PortafolioDetail } from '@app/models/portafolioDetail.model';

@Component({
  selector: 'app-tecnologias-portafolio',
  templateUrl: './tecnologias-portafolio.component.html',
  styleUrls: ['./tecnologias-portafolio.component.scss']
})
export class TecnologiasPortafolioComponent {

  @Input() dataPage: PortafolioDetail = {
    title: '',
    slug: '',
    category: [],
    general: {
        screenshot: '',
        logo: '',
        experience: '',
        description: '',
        urlProject: ''
    },
    visualProject: {
        Resourselaptop: '',
        title: '',
        description: ''
    },
    visualMobile: {
        resourseMobile: '',
        title: '',
        description: ''
    }
  }
}
