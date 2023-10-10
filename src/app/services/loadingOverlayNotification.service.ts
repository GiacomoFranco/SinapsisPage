import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingOverlayNotificationService {
  constructor() {}

  private notificacionSubject = new Subject<string>();

  notificarAlComponente(mensaje: string) {
    this.notificacionSubject.next(mensaje);
  }

  obtenerNotificacionObservable() {
    return this.notificacionSubject.asObservable();
  }
}
