import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import About from "@/components/About";
import { AboutLayoutItemType, AboutUsResponse } from "@/src/types/AboutUsTypes";

async function AboutUsPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=about-us",
    method: "GET",
  });

  console.log("response", response?.docs[0].layout);
  const aboutData: AboutLayoutItemType[] = response?.docs[0].layout;

  return (
    <>
      <About aboutPageData={aboutData} />
    </>
  );
}

export default AboutUsPage;
