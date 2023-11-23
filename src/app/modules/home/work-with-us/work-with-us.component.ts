import { Component, HostListener, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent implements OnInit {
  isWWUResponsive: Boolean;
  isMobile: Boolean;

  @Input() dataWorkUs = {
    title: '',
    description: '',
    extraText: '',
    imagen: ''
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
    this.isWWUResponsive = window.innerWidth < 1025;
  }

  ngOnInit(): void {
    this.checkWindowSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }
}
