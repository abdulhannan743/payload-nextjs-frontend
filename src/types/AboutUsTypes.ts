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
interface Layout {
  heading: string;
  text: string;
  image: Image;
  id: string;
  blockName: string;
  blockType: string;
}

interface content {
  layout: AboutLayoutItemType[];
  id: string;
}

export type AboutLayoutItemType = {
  Image?: Image;
  image?: Image;
  heading: string;
  text: string;
  link: string[];
  id: string;
  imageHeading?: string;
  ceoText?: string;
  blockName: string;
  content: content[];
  blockType: string;
};

interface Doc {
  id: string;
  name: string;
  slug: string;
  layout: AboutLayoutItemType[];
  createdAt: string;
  updatedAt: string;
}

export type AboutUsResponse = {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};
