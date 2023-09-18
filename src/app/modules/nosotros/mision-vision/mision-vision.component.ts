import { AfterViewInit, Component, Input } from '@angular/core';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.scss']
})
export class MisionVisionComponent implements AfterViewInit{
  @Input() pageData: nosotrosPage;

  ngAfterViewInit(): void {
    this.animateMisionVision();
  }

  animateMisionVision() {
    gsap.registerPlugin(ScrollTrigger);

   
    gsap.from(".mision-vision-row", {
      x: "100%",
      ease: 'expo',
      duration: 5,
      scrollTrigger: {
        trigger: '.mision-vision-row',
        start: this.getScreen(),
        end: '+=200% center',
      }
    });

  }

  getScreen():string{
    let size = '';
    if (window.innerWidth > 1024) {
      size = 'top center';
    }
    if (window.innerWidth <= 1024) {
      size = '-400px top';
    }
    return size;
  }
}
