import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('laptop') laptop: ElementRef<HTMLElement>;
  @ViewChild('absoluteLaptop') absoluteLaptop: ElementRef<HTMLElement>;
  @ViewChild('relativeLaptop') relativeLaptop: ElementRef<HTMLElement>;

  constructor(private renderer2: Renderer2) {}

  change(): void {
    const state = Flip.getState(this.laptop.nativeElement);

    this.renderer2.appendChild(
      this.relativeLaptop.nativeElement,
      this.laptop.nativeElement
    );

    const flip = Flip.from(state, {
      absolute: true,
      duration: 1,
      scale: true,
      ease: 'power3',
    });

    ScrollTrigger.create({
      trigger: '.banner-principal',
      pin: '.banner-principal',
      scrub: true,
      start: 'top top',
      end: '+=100% 70%',
      markers: true,
      animation: flip,
      onEnter: () => {
        console.log(flip);
      },
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(Flip, ScrollTrigger);

    this.change();
  }
}
