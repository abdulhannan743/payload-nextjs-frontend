interface Image {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
}

interface layout {
  heading: string;
  text: string;
  icon: Image;
  image: Image;
}

export type AIDevelopmentServicesTypes = {
  heading: string;
  text: string;
  id: string;
  imageHeading?: string;
  ceoText?: string;
  blockName: string;
  layout: layout[];
  blockType: string;
};
