export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  price?: string;
}
