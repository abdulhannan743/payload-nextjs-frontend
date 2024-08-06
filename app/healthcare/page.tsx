import React from "react";
import { Metadata } from "next";

import HealthCare from "@/components/Health-Care";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchMetadata } from "@/src/utils/metaData";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.HEALTH_CARE);
  return fetchMetadata(url);
}

async function HealthCarePage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HEALTH_CARE),
    method: "GET",
  });
  const healthCareData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "healthcare")?.layout || [];

  return <HealthCare healthCareData={healthCareData} />;
}

export default HealthCarePage;
