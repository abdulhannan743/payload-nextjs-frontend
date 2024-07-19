import { RESOURCE_TYPES } from "../constants/common";
import { AZT_ROUTES } from "../constants/routes";

type SlugKeysType = keyof typeof RESOURCE_TYPES;
type ResourceTypes = typeof RESOURCE_TYPES;
type SlugType = ResourceTypes[SlugKeysType];

export const getPageURL = (slug: SlugType) => {
  const baseURL = AZT_ROUTES.PAGE;
  return baseURL + slug;
};
