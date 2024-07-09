import { RESOURCE_TYPES } from "../constants/common";

type SlugKeysType = keyof typeof RESOURCE_TYPES;
type ResourceTypes = typeof RESOURCE_TYPES;
type SlugType = ResourceTypes[SlugKeysType];

export const getPageURL = (slug: SlugType) => {
  const baseURL = "/api/pages?where[slug][equals]=";
  return baseURL + slug;
};
