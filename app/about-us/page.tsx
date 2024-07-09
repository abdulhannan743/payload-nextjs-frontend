import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import About from "@/components/About";

async function AboutUsPage() {
  const response: any = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=about-us",
    method: "GET",
  });
  const aboutData = response?.docs[0].layout;

  return (
    <>
      <About aboutPageData={aboutData} />
    </>
  );
}

export default AboutUsPage;
