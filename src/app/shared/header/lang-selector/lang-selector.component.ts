import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {

  flagEng = '../../../assets/img/english.png'

  @Input() langOPtions = [
    { value: 'es', lang: 'Español', img: this.flagEng },
    { value: 'en', lang: 'English', img: this.flagEng}
  ]

  moveToTop(index: number) {
    if (index >= 0 && index < this.langOPtions.length) {
      const selectedLang = this.langOPtions[index];
      this.langOPtions.splice(index, 1);
      this.langOPtions.unshift(selectedLang);
    }
  }

}
