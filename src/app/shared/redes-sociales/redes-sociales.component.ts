import { Component, OnInit } from '@angular/core';
import { socialItems } from '@app/core/socialNetwork.mock';
import { socialNetwork } from '@app/models/socialNetwork.model';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss']
})
export class RedesSocialesComponent implements OnInit{

  dataIcons: socialNetwork[]

  ngOnInit(): void {
    this.dataIcons = socialItems
  }
}
