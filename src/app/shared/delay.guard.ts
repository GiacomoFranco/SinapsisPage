import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoadingOverlayNotificationService } from '@app/services/loadingOverlayNotification.service';
import { Subscription, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DelayGuard implements CanActivate {
  constructor(
    private router: Router,
    private loadingOverlayService: LoadingOverlayNotificationService
  ) {}

  promise: boolean;
  subscription: Subscription;

  async canActivate(): Promise<boolean> {

    this.loadingOverlayService.notificarAlComponente('trigger');

    let promise: boolean = await new Promise((resolve) => setTimeout( () => {
      resolve(true);
    }, 480));

    return this.promise;
  }
}
