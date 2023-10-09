import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { gsap } from 'gsap';
import { LoadingOverlayNotificationService } from '@app/services/loadingOverlayNotification.service';


@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
})
export class LoadingOverlayComponent {
  public subscriber: Subscription;

  //en el constructor llamo mi router
  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private loadingOverlayService: LoadingOverlayNotificationService
  ) {}

  actualRoute: string;

  //En el ngOnInit, me subscribo al router events, que es el que te mandara los eventos cada que se inicie la navegación, y filtramos que solo te mande cuando termina de navegar NavigationEnd

  overlayAnimation = gsap.timeline();
  firstLoadAnimation = gsap.timeline();
  initialRender = true;
  firstNavigation = true;

  changeInitialRender(){
    this.initialRender = false;
  }

  executeAnimation() {
    const component = this

    if (this.firstNavigation) {
      this.overlayAnimation.fromTo('.loading-screen', {top: '-100%', duration: .5, ease: 'power4.in'}, {top: '0', onComplete(){
        component.loadingOverlayService;
      }} );
      this.overlayAnimation.fromTo('.rounded-div-wrap-bottom', {height: '20vh', duration: .5, ease: 'power4.in'}, {height: '0'});
      this.overlayAnimation.fromTo('.page-name', { y: '50%', opacity: 0 }, { y: '0', opacity: 1 }, '-=.5');
      this.overlayAnimation.to('.loading-screen', {top: '100%', duration: .5, delay: .5, ease: 'power4.in'} );
      this.overlayAnimation.fromTo('.rounded-div-wrap-top', {height: '80vh', duration: 1, ease: 'power4.out', overwrite: true}, {height: '0'}, '-=.5');
      this.firstNavigation = false;
    } else {
      this.overlayAnimation.restart()
    }
  }

  executeFirstLoadAnimation(){

    const component = this

    this.firstLoadAnimation.to('.loading-screen', {top: '-100%', ease: 'power4.out', duration: 1, delay: 1} );
    this.firstLoadAnimation.fromTo('.rounded-div-wrap-bottom', {height: '60vh'}, {height: '0', duration: 1, ease: 'power4.out', onComplete(){
      component.initialRender = false;
    }}, '-=1');
  }

  ngOnInit() {

    this.executeFirstLoadAnimation();

    this.loadingOverlayService.obtenerNotificacionObservable().subscribe((mensaje) => {
      this.executeAnimation()
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.actualRoute = title
        }
      });
  }

  //En el onDestroy, valido si mi subscriber sigue activo y me desuscribo, si no seguirá activo escuchando cuando navegues a otro componente donde no lo requieras.
  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}
