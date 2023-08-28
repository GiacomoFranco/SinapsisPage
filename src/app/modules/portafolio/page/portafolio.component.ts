import { Component, OnInit, DoCheck } from '@angular/core';
import { CasosDeExito, CasosDeExitoScreens } from '@app/core/casosDeExito.mock';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { Router } from '@angular/router';
import { PortafolioService } from '@app/services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, DoCheck {
  casosExito = CasosDeExito;
  casosExitoScreens = CasosDeExitoScreens;
  grouped: any[] = []
  skip = 0;
  pageSize = 6;
  pagedChases: any[] = [];
  pagedChasescpy: any[] = this.pagedChases;
  total = this.casosExitoScreens.length;
  contentId = 'cards-cont';


  constructor(private router: Router, private portafolioService: PortafolioService){}

  ngOnInit(): void {
    this.pageData();
    this.getService();
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

  getService(){
    this.portafolioService.getPagePortafolio('2', '6').then(resp => {
      const {data} = resp;
      console.log(data)
    })
  }

  ngAfterViewInit() {
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
