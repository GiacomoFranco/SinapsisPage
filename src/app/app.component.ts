import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sinapsis-web';

  hasRendered = false;

  ngOnInit(): void {
    this.hasRendered = true;
    const browserLanguage = window.navigator.language;
    const codeLanguage = browserLanguage.split('-')[0];
    const storedLanguage = localStorage.getItem('language');

    if (!storedLanguage) {
      localStorage.setItem('language', codeLanguage);
    }
  }
}
