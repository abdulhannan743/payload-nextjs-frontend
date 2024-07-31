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

export interface CustomDevelopmentData {
  heading: string;
  text: string;
  iconHeading: string;
  iconText: string;
  icon: Icon;
  image: Image;
}
