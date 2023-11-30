import { Component, Input, AfterViewInit, ElementRef, QueryList, ViewChildren  } from '@angular/core';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {

  @Input() pageData: nosotrosPage;

  @ViewChildren('containerText') containerTextElements: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.timeline-line', {
      height: '100%',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });

    this.containerTextElements.changes.subscribe(() => {
      this.initTimelineAnimations();
    });
  }

  initTimelineAnimations(): void {
    this.containerTextElements.forEach((container, index) => {
      gsap.from(container.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 0.1,
        scrollTrigger: {
          trigger: container.nativeElement,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });
    });
  }
}
