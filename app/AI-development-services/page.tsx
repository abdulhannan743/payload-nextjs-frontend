import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import AIDevelopmentServices from "@/components/AI-Development-Services";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";

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
