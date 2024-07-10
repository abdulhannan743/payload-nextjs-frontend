export const getHref = (slug: string): string => {
  return slug === "home" ? "/" : `/${slug}`;
};
