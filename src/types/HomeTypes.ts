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
  tag?: string;
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
  heading: string;
  matadata: {
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

// New types for IndustriesServicesCard
export type IndustryContent = {
  logo: {
    url: string;
    alt: string;
    width: string | number;
    uheightrl: string | number;
  };

  heading: string;

  typography: {
    root: {
      children: {
        children: {
          text: string;
        }[];
      }[];
    };
  };
  paragraph: {
    root: {
      children: {
        children: {
          text: string;
        }[];
      }[];
    };
  };
  link: {
    label: string;
  }[];
};

export type IndustriesProps = {
  industries: {
    heading: string;
    content: IndustryContent[];
  };
};
