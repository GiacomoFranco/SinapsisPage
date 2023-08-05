import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  logo = '../../../assets/img/logo.svg'

  @Input() hasSlimLogo:boolean = false;
}
