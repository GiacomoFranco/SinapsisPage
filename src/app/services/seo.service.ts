import { Injectable } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  generateFlags(config: any): any {
    config = {
      title: '',
      description: '',
      keywords: '',
      site_name: '',
      image: '',
      slug_url: '',
      ...config
    }

    this.title.setTitle(config.title)

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ name: 'og:site_name', content: config.site_name });
    this.meta.updateTag({ name: 'og:title', content: config.title });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'og:image', content: config.image });
    this.meta.updateTag({ name: 'og:url', content: `https//:${config.slug_url}` });
  }
}
