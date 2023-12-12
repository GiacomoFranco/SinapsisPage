import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {

  flagEng = '../../../assets/img/english.png'

  @Input() langOptions = [
    { value: 'es', lang: 'Español', img: this.flagEng },
    { value: 'en', lang: 'English', img: this.flagEng }
  ]

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
      const index = this.langOptions.findIndex(lang => lang.value === storedLanguage);

      if (index !== -1) {
        const selectedLang = this.langOptions[index];
        this.langOptions.splice(index, 1); // Remove the language from its current position
        this.langOptions.unshift(selectedLang); // Add it to the beginning of the array
      }
    }
  }

  moveToTop(index: number) {
    if (index >= 0 && index < this.langOptions.length) {
      const selectedLang = this.langOptions[index];
      this.langOptions.splice(index, 1);
      this.langOptions.unshift(selectedLang);
      localStorage.setItem('language', selectedLang.value);
      location.reload();
    }
  }
}
