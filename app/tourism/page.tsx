import React from "react";
import { Metadata } from "next";

import Tourism from "@/components/Tourism";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.TOURISM);
  return fetchMetadata(url);
}
async function TourismPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.TOURISM),
    method: "GET",
  });
  const tourismData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "tourism")?.layout || [];

  return <Tourism tourismPageData={tourismData} />;
}

export default TourismPage;
