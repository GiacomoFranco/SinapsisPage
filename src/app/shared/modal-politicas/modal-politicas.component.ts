import { Component, OnInit } from '@angular/core';
import { TermsAndConditions } from '@app/models/terms.model.js';
import { GetPageDataService } from '@app/services/get-page-data.service';

@Component({
  selector: 'app-modal-politicas',
  templateUrl: './modal-politicas.component.html',
  styleUrls: ['./modal-politicas.component.scss']
})
export class ModalPoliticasComponent implements OnInit{

  dataTerms: TermsAndConditions;

  constructor(private getPagaDataService: GetPageDataService){}

  ngOnInit(): void {
    this.getPrivacyPolitics();
  }

  private getPrivacyPolitics(){
    this.getPagaDataService.getServicesPage('politicas-de-privacidad').then(resp => {
      const {data} = resp;
      this.dataTerms = data
    })
  }
}
