import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortafolioDetail } from '@app/models/portafolioDetail.model';
import { PortafolioService } from '@app/services/portafolio.service';

@Component({
  selector: 'app-portafolio-detail',
  templateUrl: './portafolio-detail.component.html',
  styleUrls: ['./portafolio-detail.component.scss']
})
export class PortafolioDetailComponent implements OnInit {
  slug = ''
  dataPage: PortafolioDetail

  constructor(private route: ActivatedRoute, private portafolioService: PortafolioService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug']
    })
    this.getPageData();
  }

  getPageData(){
    this.portafolioService.getDetail(this.slug).then(resp => {
      const {data} = resp
      this.dataPage = data
      console.log('objeto', this.dataPage)
    })
  }
}
