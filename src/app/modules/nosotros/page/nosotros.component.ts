import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { NosotrosService } from '@app/services/nosotros.service';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SeoService } from '@app/services/seo.service';
import { LoadingOverlayNotificationService } from '@app/services/loadingOverlayNotification.service';
import { Subscription } from 'rxjs';
gsap.registerPlugin(TextPlugin, ScrollTrigger);

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit, OnDestroy {
  constructor(
    private nosotrosService: NosotrosService,
    private seoService: SeoService,
    private loadingOverlayService: LoadingOverlayNotificationService
  ) {}

  initialRender = false;

  pageData: nosotrosPage;
  isMobile: boolean;

  ngOnInit(): void {
    this.getData();
    this.checkWindowSize();
    this.FlagsSEO();
  }

  ngOnDestroy(): void {
    this.pageData = {
      gallery: [],
      ourHistory: {
        imagen: '',
        title: '',
        description: '',
      },
      misionVision: [],
      sectionDesign: {
        imagen: '',
        title: '',
        descripcion: '',
        UrlBtn: '',
        name_button: ''
      },
      timeLine: {
        description: '',
        data: [],
      },
      team: {
        title: '',
        subtitle: '',
        workWithUs: ''
      }
    };
  }

  async getData() {
    try {
      await this.nosotrosService.getNosotrosPage().then((response) => {
        const { data } = response;
        this.pageData = data;
        this.initialRender = true
      });
    } catch (error) {
      console.error(error);
    }
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Acerca de Nosotros',
      description:
        'Descubre quiénes somos en Sinapsis. Somos un equipo de expertos en desarrollo de software comprometidos con la entrega de soluciones tecnológicas de vanguardia. Conoce nuestra historia, valores y visión de innovación.',
      keywords:
        'nosotros, equipo de desarrollo de software, empresa de tecnología, expertos en desarrollo de software, historia de la empresa, visión y valores, innovación tecnológica',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/nosotros',
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }
}
