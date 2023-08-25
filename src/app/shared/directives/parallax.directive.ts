import { Directive, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  constructor(private element: ElementRef) {}

  @Input() selectorClassAnimation: string;
  @Input() from: {};
  @Input() to: {};


  ngOnInit(): void {
    gsap
      .timeline({
        ease: 'power',
        scrollTrigger: {
          trigger: this.element.nativeElement,
          start: '10% center',
          markers: true,
          id: 'parallax',
          scrub: true,
        },
      })
      .fromTo(`.${this.selectorClassAnimation}`, { ...this.from }, { ...this.to });
  }


}
