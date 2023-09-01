import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-sinapsis',
  templateUrl: './button-sinapsis.component.html',
  styleUrls: ['./button-sinapsis.component.scss']
})

export class ButtonSinapsisComponent {
  @Input() url = '';
  @Input() name_button = '';
  @Input() redirects = true;
}
