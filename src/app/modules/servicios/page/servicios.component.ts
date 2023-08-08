import { Component, OnInit} from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { ServiciosService } from 'src/app/services/servicios.service';
import { servicePageData } from '@app/models/servicePage.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  pageData: servicePageData = {
    developSoftware: {
      title: '',
      description: '',
      secondDescription: '',
    },
    phoneSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    laptopSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    SectionWorkWithUs: {
      Title: '',
      urlBoton: '',
    },
    sectionStadistics: [],
  };

  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
    this.getPage();
    this.initScrollReveal();
  }

  getPage() {
    this.service.getServicesPage().then((resp) => {
      const { data } = resp;
      this.pageData = data;
    });
  }

  initScrollReveal() {
    const sr = ScrollReveal();

    sr.reveal('.scroll-software', {
      duration: 4000,
      origin: 'bottom',
      distance: '100px',
      delay: 600,
      easing: 'ease-out',
    });
    sr.reveal('.scroll-left', {
      delay: 600,
      duration: 5000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-out',
    });

    sr.reveal('.scroll-right', {
      delay: 600,
      duration: 4000,
      origin: 'right',
      distance: '100px',
      easing: 'ease-out',
    });
  }
}
