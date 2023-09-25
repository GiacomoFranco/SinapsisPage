import { Component, OnInit } from '@angular/core';
import { Proyecto } from '@app/models/proyect.model';
import { ProyectosService } from '@app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-destacados',
  templateUrl: './proyectos-destacados.component.html',
  styleUrls: ['./proyectos-destacados.component.scss'],
})
export class ProyectosDestacadosComponent implements OnInit {
  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    this.proyectosService.getProductosDestacados().then((resp) => {
      this.projects = resp.data;
      this.project = this.projects[1];
      this.projectBefore = this.project;
      this.lenghtprojects = this.projects.length;
      this.setProjectsInterval();
      this.isPendingProjects = false;
    });
  }

  isPendingProjects: boolean = true;
  projects: Proyecto[];
  lenghtprojects: number;
  project: Proyecto;
  projectBefore: Proyecto;
  projectCicle: any;
  selectProyect(i: number) {
    this.project = this.projects[i];
    this.restartProjectInterval();
  }
  isSlideActive(i: number): boolean {
    let proyectIndex = this.projects.indexOf(this.project);
    return proyectIndex === i;
  }

  setProjectsInterval() {
    this.projectCicle = setInterval(() => {
      let indexOfProject = this.projects.indexOf(this.project);

      if (indexOfProject + 1 < this.lenghtprojects) {
        this.project = this.projects[indexOfProject + 1];
      } else {
        this.project = this.projects[0];
      }
    }, 5000);
  }

  stopProjectsInterval() {
    clearInterval(this.projectCicle);
  }

  restartProjectInterval() {
    this.stopProjectsInterval();
    this.setProjectsInterval();
  }

  manualSlideAnimation() {
    gsap.fromTo(
      '.proyect-content',
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }

  ngDoCheck(): void {
    if (this.project !== this.projectBefore) {
      this.projectBefore = this.project;
      this.manualSlideAnimation();
    }
  }
}
