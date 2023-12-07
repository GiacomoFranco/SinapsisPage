import { Component, Input } from '@angular/core';
import { featuresWork } from '@app/models/workWithUs.model';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.scss']
})
export class PerksComponent {
  @Input() perks: featuresWork[];
}
