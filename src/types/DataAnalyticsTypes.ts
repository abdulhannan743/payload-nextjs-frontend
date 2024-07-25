export type Image = {
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
};
export type DataAnalyticsOverviewType = {
  heading: string;
  text: string;
  Image: Image;
};
