import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { Router } from '@angular/router';
import { PortafolioService } from '@app/services/portafolio.service';
import { portafolioModel } from '@app/models/portafolio.model';
import { Pagination } from '@app/models/pagination.model';
import { SeoService } from '@app/services/seo.service';
import { infoPortafolio } from '@app/models/portafolioSlider.model';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, DoCheck {
  dataPage: portafolioModel[] = []
  dataPagination: Pagination = {
    totalPages: 1,
    currentPage: 1,
    perPage: 7,
    totalItems: 0,
  }
  grouped: any[] = []
  skip = 0;
  pageSize = 6;
  pagedChases: any[] = [];
  pagedChasescpy: any[] = this.dataPage;
  total = this.dataPagination.totalItems;
  contentId = 'cards-cont';
  isMobile = false;

  infoPage: infoPortafolio

  constructor(private router: Router, 
              private portafolioService: PortafolioService,
              private seoService: SeoService) { }

  ngOnInit(): void {
    this.pageData(this.dataPagination);
    this.getInfoPage();
    this.validateResponsive();
    this.FlagsSeo()
  }

  ngDoCheck(): void {
    if (this.dataPage !== this.pagedChasescpy) {
      this.grouped = []
      this.pagedChasescpy = this.dataPage;
      for (let i = 0; i < this.dataPage.length; i += 3) {
        this.grouped.push(this.dataPage.slice(i, i + 3));
      }
    }
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.dataPagination.perPage = e.take;
    this.dataPagination.currentPage = Math.ceil(
      ((this.skip) / (e.take)) + 1
    );
    this.pageData(this.dataPagination)
  }

  private pageData(pagination: Pagination): void {
    this.portafolioService.getPagePortafolio(pagination.currentPage, this.pageSize).then(resp => {
      const { data } = resp;
      this.dataPage = data.post
      this.dataPagination = data.pagination
      this.pagedChases = this.dataPage.slice(this.skip, this.skip + this.pageSize);
    })
  }

  private getInfoPage(){
    this.portafolioService.getInfoPagePortafolio().then(resp => {
      const {data} = resp;
      this.infoPage = data;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.validateResponsive();
  }

  validateResponsive() {
    this.isMobile = window.innerWidth < 1024;
  }

  redirect(slug: string) {
    this.router.navigate([`portafolio/${slug}`])
  }

  FlagsSeo() {
    this.seoService.generateFlags({
      title: 'Portafolio de proyectos',
      description: 'Explora nuestro portafolio de proyectos de desarrollo de software personalizados. Descubre cómo hemos ayudado a diversas empresas a alcanzar sus objetivos a través de soluciones de software innovadoras y de alta calidad.',
      keywords: 'Desarrollo de software personalizado, Portafolio de proyectos, Soluciones de software innovadoras, Programación a medida, Proyectos de desarrollo web, Aplicaciones personalizadas, Desarrollo de aplicaciones móviles, Casos de éxito en desarrollo de software, Experiencia en desarrollo tecnológico, Implementación de soluciones digitales',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/portafolio',
    })
  }
}
