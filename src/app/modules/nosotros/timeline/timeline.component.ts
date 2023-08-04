import { Component, Input, OnInit } from '@angular/core';
import { Timeline, nosotrosPage } from '@app/models/nosotrosPage.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{
  timelineType = 'horizontal'
  positionTimeline = 'top'

  @Input() pageData: nosotrosPage = {
    gallery: [],
    ourHistory: {
      imagen: '',
      title: '',
      description: ''
    },
    timeLine: {
      description: '',
      data: []
    },
    misionVision: [],
    sectionDesign: {
      imagen: '',
      title: '',
      descripcion: '',
      UrlBtn: ''
    }
  }

  ngOnInit(): void {
    this.timelineResponsive();
  }

  timelineResponsive() {
    if (window.innerWidth <= 1024) {
      this.timelineType = 'vertical';
      this.positionTimeline = 'alternate'
    }
  }
}
