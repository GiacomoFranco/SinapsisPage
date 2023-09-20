import { Component, OnInit} from '@angular/core';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  constructor(private seoService:SeoService){

  }

  ngOnInit(): void {
    this.FlagsSEO();
  }

  FlagsSEO() {
    this.seoService.generateFlags({
      title: 'Nuestro Blog',
      description:
        'En Sinapsis, estamos en la vanguardia de la tecnología. Descubre cómo nuestro equipo de expertos en desarrollo de software está transformando el futuro con soluciones tecnológicas innovadoras. Únete a nosotros en este viaje hacia la excelencia tecnológica.',
      keywords:
        'Preguntas frecuentes, FAQ, Respuestas, Solucionar dudas, Información',
      site_name: 'Sinapsis',
      image: '',
      slug_url: '/',
    });
  }

}
