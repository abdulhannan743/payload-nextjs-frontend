import { Image, PageLink } from "./ServiceBlockTypes";

export type ServiceType = {
  id: string;
  blockName: string;
  blockType: string;
  title: string;
  iconName: string;
  description: string;
  tabs: ServiceTab[];
};

type ServiceTab = {
  heading: string;
  title?: string;
  description?: string;
  link: PageLink[];
  items: ServiceItemType[];
  id: string;
};

export type ServiceItemType = {
  id: string;
  title: string;
  description?: string;
  image?: Image;
};
