import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-sinapsis',
  templateUrl: './button-sinapsis.component.html',
  styleUrls: ['./button-sinapsis.component.scss']
})

export class ButtonSinapsisComponent {
  @Input() url = '';
  @Input() name_button: String;
  @Input() redirects = true;
}
