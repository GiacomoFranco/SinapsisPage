export interface Proyecto {
  general: ProyectInfo;
  title: string;
  slug: string;
}

export interface ProyectInfo {
  description: string;
  experience?: string;
  logo: string;
  screenshot?: string;
  urlProject?: string;
}
