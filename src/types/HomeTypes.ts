export type TypographyNode = {
  text: string;
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  type?: string;
  version?: number;
};

export type TypographyChild = {
  children: TypographyNode[];
  direction?: string;
  format?: string;
  indent?: number;
  type?: string;
  version?: number;
};

export type Typography = {
  root: {
    children: TypographyChild[];
    direction?: string;
    format?: string;
    indent?: number;
    type?: string;
    version?: number;
  };
};

export type AccordionData = {
  question: string;
  answer: string;
};

export type IndustriesCardProps = {
  matadata: {
    heading: string;
    typoPara: Array<{
      typography: Typography;
      paragraph: Typography;
    }>;
  };
};

export type HomeProps = {
  heading: string;
  text: string;
  matadata: {
    heading: string;
    typoPara: Array<{
      typography: Typography;
      paragraph: Typography;
    }>;
  };
};

export type IndustryContent = {
  logo: {
    url: string;
    alt: string;
    width: number | `${number}`;
    height: number | `${number}`;
  };
  typography: Typography;
  paragraph: Typography;
  link: {
    type: string;
    label: string;
    page: {
      id: string;
      name: string;
      slug: string;
      layout: Array<{
        heading: string;
        text: string;
        link: any[];
        id: string;
        blockName?: string;
        blockType: string;
      }>;
      createdAt: string;
      updatedAt: string;
    };
    parent: {
      id: string;
      name: string;
      slug: string;
      layout: Array<{
        heading: string;
        text: string;
        link: any[];
        id: string;
        blockName?: string;
        blockType: string;
      }>;
      createdAt: string;
      updatedAt: string;
    };
    id: string;
  }[];
  id: string;
};

export type IndustriesProps = {
  industries: {
    heading: string;
    content: IndustryContent[];
  };
};
