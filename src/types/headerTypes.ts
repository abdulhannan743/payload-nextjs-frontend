import { Image } from "./CommonTypes";

export interface LinkType {
  id: string;
  slug: string;
}

export interface NavLinkType {
  label: string;
  link: LinkType;
  parent?: LinkType;
  childrens?: NavLinkType[];
  layout?: {
    heading: string;
    text: string;
  }[];
  subMenu: SubMenuType[];
}

export type SubMenuType = {
  heading: string;
  link: {
    label: string;
    page: {
      slug: string;
    };
  }[];
  subMenuItems: {
    icon: Image;
    title: string;
    description: string;
    page: LinkType;
  }[];
};

export interface HeaderType {
  logo: Image;
  navLinks: NavLinkType[];
  link: {
    label: string;
    page: {
      slug: string;
    };
  }[];
}
