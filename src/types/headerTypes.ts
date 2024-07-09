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
}

export interface HeaderType {
  logo: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  navLinks: NavLinkType[];
  link: {
    label: string;
    page: {
      slug: string;
    };
  }[];
}
