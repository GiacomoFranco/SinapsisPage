/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(Flip, ScrollTrigger);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
