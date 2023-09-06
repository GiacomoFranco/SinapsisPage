import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.scss']
})
export class PerksComponent {
  @Input() perks: any[] = [
    {icon: 'assets/workWithUs/buildings.svg', title: 'Modalidad', text: 'Lorem ipsum is simple'},
    {icon: 'assets/workWithUs/time.svg', title: 'Jornada', text: 'Lorem ipsum is simple'},
    {icon: 'assets/workWithUs/team.svg', title: 'Contratación', text: 'Lorem ipsum is simple'}
  ];
}
