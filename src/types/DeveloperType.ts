import { Image, PageLink } from "./ServiceBlockTypes";

export type DeveloperSectionType = {
  id: string;
  title: string;
  blockName: string;
  blockType: string;
  tabs: DeveloperTabs[];
  developers: DevelopersType[];
};

export type DevelopersType = {
  id: string;
  title: string;
  description?: string;
  skills: DeveloperSkill[];
  image: Image;
  link: PageLink[];
};

export type DeveloperTabs = {
  id: string;
  label: string;
  value: string;
};

export type DeveloperSkill = {
  id: string;
  title: string;
};
