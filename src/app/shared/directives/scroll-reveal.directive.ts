import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  @Input() x: number | string;
  @Input() y: number | string;
  @Input() start: string = '-30% center';
  @Input() duration: number | string = 1;
  @Input() delay: number | string;
  @Input() stagger: number | string | any = 0.2;
  @Input() selectorClassAnimation: string;
  @Input() markers: boolean = false;

  @Input() set isPending(state: boolean) {
    if (!state) {
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
          duration: this.duration,
          stagger: this.stagger,
          delay: this.delay,
          scrollTrigger: {
            trigger: this.element.nativeElement,
            start: this.start,
            markers: this.markers,
          },
        }
      );
    }, 0);
  }

  ngAfterViewInit(): void {
    if (!this.isPending) {
      this.animation();
    }
  }
}
