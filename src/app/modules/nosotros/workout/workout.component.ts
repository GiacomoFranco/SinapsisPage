import { Component, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(Flip, ScrollTrigger);

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contentAbsolute') contentAbsolute: ElementRef<HTMLElement>;
  @ViewChild('tablet') tablet: ElementRef<HTMLElement>;
  @ViewChild('contentRelative') contentRelative: ElementRef<HTMLElement>;

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

  animation: gsap.core.Tween;

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit(): void {
    this.startAnimation()
  }

  startAnimation() {
    const state = Flip.getState(this.tablet.nativeElement);

    this.renderer2.appendChild(
      this.contentRelative.nativeElement,
      this.tablet.nativeElement
    );

    const flip = Flip.from(state, {
      scale: true,
      absolute: true,
      duration: 3,
      ease: 'power3',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.workout',
          start: this.responsiveAnim(),
          pin: '.workout',
          scrub: true,
          markers: true
        },
      })
      .add(flip)
      .from('.content-text-anim', {
        x: 200,
        opacity: 0,
        duration: 2,
      });
  }

  responsiveAnim():string{
    let size = '';
    if(window.innerWidth > 1024){
      size = '-50px top';
    }
    if(window.innerWidth >= 767 && window.innerWidth <= 1024){
      size = '-100px top';
    }
    return size;
  }

  ngOnDestroy(): void {
    if (this.animation) {
      this.animation.kill();
    }
  }
}
