import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-mobile',
  templateUrl: './project-mobile.component.svg',
  styleUrls: ['./project-mobile.component.scss']
})
export class ProjectMobileComponent {
  @Input() url_image = ''
  @Input() id: string | number;

  @Input() set idPhone(id: number | string){
    this.id = "id_phone_"+ id
  };
  

  changeId():string{
    return `url(#${this.id})`
  }
}
