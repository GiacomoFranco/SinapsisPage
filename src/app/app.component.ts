import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sinapsis-web';

  hasRendered = false;

  constructor(private translate: TranslateService) {
    const userLang = navigator.language || 'en';
    const languageCode = userLang.split('-')[0];
    this.translate.setDefaultLang(languageCode);
    this.translate.use(languageCode)
  }

  ngOnInit(): void {
    this.hasRendered = true;
  }
}
