import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perk',
  templateUrl: './perk.component.html',
  styleUrls: ['./perk.component.scss'],
})
export class PerkComponent {
  @Input() text: String;
  @Input() icon: String;
  @Input() title: String;
}
