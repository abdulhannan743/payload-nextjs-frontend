import React from "react";
import { Metadata } from "next";

import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import AIDevelopmentServices from "@/components/AI-Development-Services";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.AI_DEVELOPMENT_SERVICES);
  return fetchMetadata(url);
}

async function AboutUsPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.AI_DEVELOPMENT_SERVICES),
    method: "GET",
  });
  const AIDevelopmentData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "ai-development-services")
      ?.layout || [];

  return (
    <>
      <AIDevelopmentServices AIDevelopmentData={AIDevelopmentData} />
    </>
  );
}

export default AboutUsPage;
