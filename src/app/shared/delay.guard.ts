import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoadingOverlayNotificationService } from '@app/services/loadingOverlayNotification.service';

@Injectable({
  providedIn: 'root',
})
export class DelayGuard implements CanActivate {
  constructor(private router: Router, private loadingOverlayService: LoadingOverlayNotificationService) {}

  async canActivate(): Promise<boolean> {
    this.loadingOverlayService.notificarAlComponente('trigger');

    let promise: boolean = await new Promise((resolve) => setTimeout( () => {
      resolve(true);
    }, 500));

    return promise;
  }
}
