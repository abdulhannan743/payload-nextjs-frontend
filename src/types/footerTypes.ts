export type FooterData = {
  layout: Layout[];
  heading: string;
  navLinks: NavLink[];
  linkHeading: { heading: string };
  link: LinkItem[];
};

export type Layout = {
  Image?: ImageType;
  text?: string;
  link?: ButtonData[];
  slides?: Slide[];
  typography?: Typography;
  paragraph?: Paragraph;
  Heading?: RichTextType;
  address?: ContactInfoType[];
  email?: ContactInfoType[];
  contactNumber?: ContactInfoType[];
};

export type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type ButtonData = {
  label: string;
  page: {
    slug: string;
  };
};

export type Slide = {
  media: ImageType;
};

export type Typography = {
  root: { children: { children: { text: string } }[] };
};

export type Paragraph = {
  root: { children: { children: { text: string } }[] };
};

export type NavLink = {
  label: string;
  parent: {
    slug: string;
  };
};

export type LinkItem = {
  id: string;
  label: string;
  page: {
    slug: string;
  };
};

export type RichTextType = {
  root: {
    children: Array<{
      children: Array<{
        text: string;
      }>;
    }>;
  };
};

export type ContactInfoType = {
  title: RichTextType;
  Address?: string;
  email?: string;
  contactNumber?: string;
};
