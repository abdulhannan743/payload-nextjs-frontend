export type ServiceBlockType = {
  id: string;
  title: string;
  description?: string;
  blockName: string;
  blockType: string;
  items: ServiceBlockItemType[];
  link?: CustomLink[];
};

export type ServiceBlockItemType = {
  id: string;
  title: string;
  description?: string;
  iconName?: string;
  image?: Image;
  link?: CustomLink[];
};

export type Image = {
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
};

export type CustomLink = {
  type: string;
  label: string;
  url: string;
  id: string;
};