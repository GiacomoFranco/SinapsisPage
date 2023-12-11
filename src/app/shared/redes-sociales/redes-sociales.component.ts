import { Component, OnInit } from '@angular/core';
import { socialItems } from '@app/core/socialNetwork.mock';
import { socialNetwork } from '@app/models/socialNetwork.model';
import { FooterService } from '@app/services/footer.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss']
})
export class RedesSocialesComponent implements OnInit{

  dataIcons: socialNetwork[]

  constructor(private footerService: FooterService){}

  ngOnInit(): void {
    this.footerService.getSocialNetwork().then(resp => {
      const {data} = resp;
      this.dataIcons = data
    })
  }
}
