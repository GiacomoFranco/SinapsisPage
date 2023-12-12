import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { servicePageData } from '@app/models/servicePage.model';
import { SeoService } from '@app/services/seo.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GetPageDataService } from '@app/services/get-page-data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  isMobile = true;

  pageData: servicePageData;

  safeDescription: SafeHtml;

  constructor(
    private getPagaDataService: GetPageDataService,
    private seoService: SeoService,
    private sanitizer: DomSanitizer,
  ) { }

  initialRender = false;

  ngOnInit(): void {
    this.getPage();
    this.FlagsSeo();
    this.checkWindowSize();
  }

  async getPage(): Promise<void> {
    const cacheKey = 'servicesPageData';

    try {
      const cache = await caches.open('ServiciosPage'); // Cambia 'myCacheName' por el nombre que desees
      const response = await cache.match(cacheKey);

      if (response) {
        const data = await response.json();
        this.pageData = data;
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(
          this.pageData.developSoftware.secondDescription
        );
        this.initialRender = true;
      } else {
        const resp = await this.getPagaDataService.getServicesPage('servicios');
        const { data } = resp;
        this.pageData = data;
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(
          this.pageData.developSoftware.secondDescription
        );
        this.initialRender = true;
        await cache.put(cacheKey, new Response(JSON.stringify(this.pageData)));
      }
    } catch (error) {
      console.error('Error al obtener datos desde la caché:', error);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

  FlagsSeo() {
    this.seoService.generateFlags({
      title: 'Servicios de Desarrollo de Software',
      description:
        'Nuestros servicios de desarrollo de software personalizados están diseñados para satisfacer las necesidades únicas de tu negocio. Ofrecemos soluciones de software de alta calidad para impulsar la eficiencia y la innovación.',
      keywords:
        'servicios de desarrollo de software, desarrollo de aplicaciones, soluciones de software, desarrollo personalizado, programación a medida, desarrollo de software a medida',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/servicios',
    });
  }
}
