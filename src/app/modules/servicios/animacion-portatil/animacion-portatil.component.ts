import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-animacion-portatil',
  templateUrl: './animacion-portatil.component.html',
  styleUrls: ['./animacion-portatil.component.scss']
})
export class AnimacionPortatilComponent implements AfterViewInit, OnDestroy {

  animationItem: any;
  @ViewChild('lottiContainer', { static: true })


  lottiContainer!: ElementRef<HTMLDivElement>;
  @Input() urlAnim: any;

  options: AnimationOptions = {
    path: '/assets/Animation/animation_pc.json',
    autoplay: false,
  };

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {

    setTimeout(() => {
      const lottieElement = this.lottiContainer.nativeElement;
      const animation = this.animationItem;
      let animationProgress = 0;
      let isScrollingUp = false;

      function updateAnimationProgress() {
        if (animation) {
          const frame = Math.floor(animation.totalFrames * animationProgress);
          animation.goToAndStop(frame, true);

          if (isScrollingUp && frame === 0) {
            animationProgress = 0;
            updateAnimationProgress();
          }
        }
      }

      ScrollTrigger.create({
        trigger: lottieElement,
        pin: '.content-animation',
        start: this.responsiveAnimation(),
        end: () => `+=${lottieElement.clientHeight}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= 0.99 && !isScrollingUp) {
            animationProgress = 179 / animation.totalFrames;
          } else {
            animationProgress = progress;
          }
          updateAnimationProgress();
        },
      });

      updateAnimationProgress();
    }, 1000);
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  responsiveAnimation(): string {
    let size = '';
    if (window.innerWidth > 1024) {
      size = 'top top';
    }
    if (window.innerWidth <= 1024) {
      size = 'top 20%';
    }
    return size;
  }

  ngOnDestroy(): void {
    if (this.animationItem) {
      this.animationItem.destroy();
    }
  }
}
