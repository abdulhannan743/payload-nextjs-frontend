import { Typography } from "./HomeTypes";

export type ServiceBlockType = {
  id: string;
  title: string;
  description?: string;
  blockName: string;
  blockType: string;
  items: ServiceBlockItemType[];
  link?: CustomLink[];
};

interface matadata {
  heading: string;
  typoPara: Array<{
    typography: Typography;
    paragraph: Typography;
  }>;
}

interface blockType {
  matadata: matadata;
  id: string;
  blockname: string;
}

export type ServiceBlockItemType = {
  id: string;
  title: string;
  description?: string;
  iconName?: string;
  image?: Image;
  block?: blockType[];
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

export type PageLink = {
  type: string;
  label: string;
  page: {
    id: string;
    name: string;
    slug: string;
  };
  id: string;
};
