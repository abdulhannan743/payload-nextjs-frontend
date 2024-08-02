import React from "react";
import { Metadata } from "next";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import { getPageURL } from "@/src/utils";
import About from "@/components/About";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.ABOUT_US);
  return fetchMetadata(url);
}

async function AboutUsPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.ABOUT_US),
    method: "GET",
  });
  const aboutData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "about-us")?.layout || [];

  return <About aboutPageData={aboutData} />;
}

export default AboutUsPage;
