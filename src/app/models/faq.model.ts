export interface FaqInterface {
  id: number;
  title: string;
  categories: {
    name: string;
    slug: string;
  }
  date: string
  thumbnail?: string
  slug?: string,
  content?:string,
  fields?: boolean,
  isActive?:boolean
}
