import Tourism from "@/components/Tourism";
import { RESOURCE_TYPES } from "@/src/constants/common";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import React from "react";

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
