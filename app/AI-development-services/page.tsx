import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import AIDevelopmentServices from "@/components/AI-Development-Services";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";

async function AboutUsPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=ai-development-services",
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
