import { Image, PageLink } from "./ServiceBlockTypes";

export type HeroSectionType = {
  text: string;
  heading: string;
  link: PageLink[];
  Image: Image;
  slides?: {
    id: string;
    title: string;
    description: string;
    image: Image;
  }[];
};
