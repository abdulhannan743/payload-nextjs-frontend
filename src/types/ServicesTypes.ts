import { CustomLink, PageLink } from "./ServiceBlockTypes";

export type ServiceType = {
  id: string;
  blockName: string;
  blockType: string;
  title: string;
  iconName: string;
  tabs: ServiceTab[];
};

type ServiceTab = {
  heading: string;
  title?: string;
  description?: string;
  link: PageLink[];
  id: string;
};
