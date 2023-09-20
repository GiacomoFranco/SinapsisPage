/// <reference types="@angular/localize" />


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { environment } from './environment';


if (environment.production) {
  enableProdMode();
}


gsap.registerPlugin(Flip, ScrollTrigger);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
