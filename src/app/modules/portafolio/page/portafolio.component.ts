import { Component, OnInit, DoCheck } from '@angular/core';
import { CasosDeExito, CasosDeExitoScreens } from '@app/core/casosDeExito.mock';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, DoCheck {
  swiper: Swiper | any;
  casosExito = CasosDeExito;
  casosExitoScreens = CasosDeExitoScreens;
  grouped: any[] = []
  skip = 0;
  pageSize = 6;
  pagedChases: any[] = [];
  pagedChasescpy: any[] = this.pagedChases;
  total = this.casosExitoScreens.length;
  contentId = 'cards-cont';


  constructor(private router: Router){}

  ngOnInit(): void {
    this.pageData();
  }
  ngDoCheck(): void {
    if (this.pagedChases !== this.pagedChasescpy) {
      this.grouped = []
      this.pagedChasescpy = this.pagedChases;
      for (let i = 0; i < this.pagedChases.length; i += 3) {
        this.grouped.push(this.pagedChases.slice(i, i + 3));
      }
    }
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 6,
      loop: false,
      autoplay: true,
      direction: this.getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  getDirection() {
    let direction: "vertical" | "horizontal" = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
  }


  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }
  public pageWithArrow(skipArrow: number, takeArrow: number, side: string): void {
    if (skipArrow > 0 && side === "left") {
      side === 'left'
      this.skip = skipArrow - 6;
      this.pageSize = takeArrow;
      this.pageData();
    }
    if (skipArrow < this.total - this.pageSize && side === "right") {
      this.skip = skipArrow + 6;
      this.pageSize = takeArrow;
      this.pageData();
    }
  }
  private pageData(): void {
    this.pagedChases = this.casosExitoScreens.slice(this.skip, this.skip + this.pageSize);
  }

  redirect(slug: string){
    this.router.navigate([`portafolio/${slug}`])
  }
}
