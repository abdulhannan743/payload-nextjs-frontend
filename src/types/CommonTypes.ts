export interface Image {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
}
export interface Layout {
  heading: string;
  text: string;
  image: Image;
  id: string;
  blockName: string;
  blockType: string;
}

export interface content {
  layout: LayoutItemType[];
  id: string;
  image?: Image;
  heading: string;
}
export interface layout {
  Image?: Image;
  image?: Image;
  heading: string;
  text: string;
  link: any[];
  id: string;
  imageHeading?: string;
  ceoText?: string;
  blockName: string;
  content: content[];
  layout: layout[];
  blockType: string;
}

export interface LayoutItemType {
  Image?: Image;
  image?: Image;
  heading: string;
  text: string;
  link: any[];
  id: string;
  imageHeading?: string;
  ceoText?: string;
  blockName: string;
  content: content[];
  layout: layout[];
  blockType: string;
}
