import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import About from "@/components/About";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";

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
