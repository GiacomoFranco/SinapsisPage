import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-sinapsis',
  templateUrl: './link-sinapsis.component.html',
  styleUrls: ['./link-sinapsis.component.scss']
})
export class LinkSinapsisComponent {
  @Input() name_link: String;
}
