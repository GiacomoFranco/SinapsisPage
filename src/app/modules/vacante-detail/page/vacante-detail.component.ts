import { Component } from '@angular/core';

@Component({
  selector: 'app-vacante-detail',
  templateUrl: './vacante-detail.component.html',
  styleUrls: ['./vacante-detail.component.scss'],
})
export class VacanteDetailComponent {
  applyModalState: boolean = true;

  toggleModalState(toggledModal: boolean | undefined = undefined): void {
    this.applyModalState = !this.applyModalState;

    if (toggledModal === undefined) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }
}
