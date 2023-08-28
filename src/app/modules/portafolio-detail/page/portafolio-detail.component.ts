import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortafolioDetail } from '@app/models/portafolioDetail.model';
import { PortafolioService } from '@app/services/portafolio.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portafolio-detail',
  templateUrl: './portafolio-detail.component.html',
  styleUrls: ['./portafolio-detail.component.scss']
})
export class PortafolioDetailComponent implements OnInit, OnDestroy {
  slug = ''

  dataPage: PortafolioDetail = {
    title: '',
    slug: '',
    category: [],
    general: {
        screenshot: '',
        logo: '',
        experience: '',
        description: '',
        urlProject: ''
    },
    visualProject: {
        Resourselaptop: '',
        title: '',
        description: ''
    },
    visualMobile: {
        resourseMobile: '',
        title: '',
        description: ''
    }
  }

  constructor(private route: ActivatedRoute, private portafolioService: PortafolioService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug']
    })
    this.getPageData();
  }

  getPageData(){
    this.portafolioService.getDetail(this.slug).then(resp => {
      const {data} = resp
      this.dataPage = data;
      this.getAnimations();
    })
  }

  getAnimations(){
    gsap.from(".portafolio-anim", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      ease: 'expo',
      duration: 3,
      scrollTrigger: {
        trigger: '.portafolio-anim',
        start: '-200 center',
      }
    });
    gsap.from(".item-text-mobile", {
      x: 100,
      opacity: 0,
      stagger: 0.3,
      ease: 'expo',
      duration: 5,
      scrollTrigger: {
        trigger: '.item-text-mobile',
        start: 'top center',
      }
    });
  }

  ngOnDestroy(): void {
    gsap.to(".anim-top", { clearProps: 'all' });
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
