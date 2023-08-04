import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { servicePageData } from '@app/models/servicePage.model';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit{

  @Input() pageData: servicePageData = {
    developSoftware: {
      title: '',
      description: '',
      secondDescription: '',
    },
    phoneSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    laptopSection: {
      title: '',
      description: '',
      urlBoton: '',
    },
    SectionWorkWithUs: {
      Title: '',
      urlBoton: '',
    },
    sectionStadistics: [],
  };

  contadores = [
    { target: 100, value: 0 },
    { target: 1000, value: 0 },
    { target: 300, value: 0 },
  ];

  constructor (private elementRef: ElementRef,){}

  ngOnInit(): void {
    this.pageData.sectionStadistics.forEach((element, i) => {
      this.contadores[i].target = Number(element.numbers);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.elementRef.nativeElement.querySelector('#estadisticas');
    const boundingClientRect = element.getBoundingClientRect();

    // Verificar si la sección de estadísticas está al menos un 50% visible en el viewport
    if (boundingClientRect.top < window.innerHeight * 0.5) {
      this.activateCounters();
    }
  }

  activateCounters(): void {
    const interval = setInterval(() => {
      let allCountersComplete = true;
      this.contadores.forEach((counter) => {
        const increment = counter.target / 500;
        if (counter.value < counter.target) {
          counter.value = Math.ceil(counter.value + increment);
          allCountersComplete = false;
        } else {
          counter.value = counter.target;
        }
      });

      if (allCountersComplete) {
        clearInterval(interval);
      }
    }, 50);
  }
}
