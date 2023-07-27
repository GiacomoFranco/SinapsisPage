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
      scale: true,
      absolute: true,
      duration: 3,
      ease: 'power3',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.banner-principal',
          pin: '.banner-principal',
          start: '1px top',
          end: '+=100% 20%',
          // markers: true,
          scrub: true,
          id: 'eda',
        },
      })
      .add(flip)
      .from('.phone-graphic', {
        x: '-200',
        opacity: 0,
        duration: 0.9,
      })
      .from('.banner-principal__text-container', {
        y: 200,
        opacity: 0,
        duration: 2,
      });

    // .add(flip)
    // .from('.banner-principal__text-container', {
    //   scrollTrigger: {
    //     trigger: '.banner-principal',
    //     pin: '.banner-principal',
    //     // start: 'top 80%',
    //     // end: '+=100% 10%',
    //     start: '20% 20%',
    //     end: '+=200% 20%',
    //     markers: true,
    //     scrub: true,
    //     id: 'eda',
    //   },
    //   x: 200,
    //   opacity: 0,
    //   duration: 1,
    // });

    // ScrollTrigger.create({
    //   trigger: '.banner-principal',
    //   pin: '.banner-principal',
    //   scrub: true,
    //   start: 'top top',
    //   end: '+=150% 70%',
    //   markers: true,
    //   animation: flip,
    // });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(Flip, ScrollTrigger);

    this.change();
  }
}
