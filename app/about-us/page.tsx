import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import About from "@/components/About";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import OurTeamSection from "@/components/About/OurTeamSection";

async function AboutUsPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=about-us",
    method: "GET",
  });
  const aboutData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "about-us")?.layout || [];

  return <About aboutPageData={aboutData} />;
}

export default AboutUsPage;
