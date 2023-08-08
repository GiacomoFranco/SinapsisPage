import { Component, OnInit} from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { NosotrosService } from '@app/services/nosotros.service';
import { nosotrosPage } from '@app/models/nosotrosPage.model';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

export class NosotrosComponent implements OnInit {
  img_workout = "/assets/img/tablet.png"
  pageData: nosotrosPage = {
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
  isMobile = false;

  constructor(private nosotrosService: NosotrosService) {
  }

  ngOnInit(): void {
    this.getPageData();
    this.checkWindowSize();
  }

  async getPageData() {
    await this.nosotrosService.getNosotrosPage().then((response) => {
      const { data } = response
      this.pageData = data;

      const text = this.pageData.ourHistory.description;
      this.animateTyping(text);
      this.initScrollReveal();
    })
  }

  animateTyping(text: string) {
    gsap.fromTo(
      '.ourHistoryText',
      {
        opacity: 1,
      },
      {
        duration: 30,
        text: text,
        ease: 'power3',
      }
    );
  }

  initScrollReveal() {
    const sr = ScrollReveal();

    sr.reveal('.row-left', {
      delay: 400,
      duration: 2500,
      origin: 'left',
      distance: '500px',
      easing: 'ease',
    });

    sr.reveal('.row-right', {
      delay: 400,
      duration: 2500,
      origin: 'rigth',
      distance: '500px',
      easing: 'ease',
    });
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth < 767;
  }

}
