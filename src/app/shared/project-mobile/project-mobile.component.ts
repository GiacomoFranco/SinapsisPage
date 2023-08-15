import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-mobile',
  templateUrl: './project-mobile.component.svg',
  styleUrls: ['./project-mobile.component.scss']
})
export class ProjectMobileComponent {
  @Input() url_image = ''
}
