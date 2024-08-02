export interface Icon {
  id: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}

export interface Image {
  id: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}

interface Layout {
  heading: string;
  text: string;
  icon: Icon;
  image: Image;
}

export interface CustomDevelopmentData {
  heading: string;
  text: string;
  iconHeading: string;
  iconText: string;
  icon: Icon;
  image: Image;
  layout: Layout[];
}
