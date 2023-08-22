import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit
 {
  constructor(private element: ElementRef) {}

  // @Input() duration = 1;
  @Input() x: number | string;
  @Input() y: number | string;
  @Input() selectorClassAnimation: string;
  @Input() markers: boolean = false;


  @Input() set isPending(state: boolean){
    console.log(state);

    if (!state) {
      console.log('here');

      this.animation();
    }
  }

  animation() {
    setTimeout(() => {
        gsap.from(
          this.selectorClassAnimation
            ? `.${this.selectorClassAnimation}`
            : this.element.nativeElement,
          {
            x: this.x,
            y: this.y,
            opacity: 0,
            ease: 'power',
            scrollTrigger: {
              trigger: this.element.nativeElement,
              start: '-30% center',
              markers: this.markers,
              // id: this.id,
            },
            duration: 1,
            stagger: 0.2,
          }
        );
    }, 0);
  }


  ngAfterViewInit(): void {
    if (!this.isPending) {
      console.log('notAsync');
      this.animation();
    }
  }
}
