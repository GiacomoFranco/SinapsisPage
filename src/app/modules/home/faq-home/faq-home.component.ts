import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-home',
  templateUrl: './faq-home.component.html',
  styleUrls: ['./faq-home.component.scss']
})
export class FaqHomeComponent {
  @Input() tituloPreguntas = ''
}
