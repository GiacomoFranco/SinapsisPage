import { Component, Input } from '@angular/core';
import { PortafolioDetail } from '@app/models/portafolioDetail.model';

@Component({
  selector: 'app-section-mobile',
  templateUrl: './section-mobile.component.html',
  styleUrls: ['./section-mobile.component.scss']
})
export class SectionMobileComponent {

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
