import React from "react";
import { Metadata } from "next";

import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import HeroSection from "@/components/sharedComponents/HeroSection";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.CONTACT_US);
  return fetchMetadata(url);
}
async function ContactUsPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.CONTACT_US),
    method: "GET",
  });
  const homeData = response?.docs[0].layout;

  const heroSectionData = homeData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  return (
    <>
      <HeroSection heroSectionData={heroSectionData} isContentCentered={true} />
    </>
  );
}

export default ContactUsPage;
