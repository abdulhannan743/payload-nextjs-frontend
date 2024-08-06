import React from "react";
import { Metadata } from "next";

import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import HeroSection from "@/components/sharedComponents/HeroSection";
import HeaderBanner from "@/components/sharedComponents/HeaderBanner";

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

  const headerSectionData = homeData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  return (
    <div className="px-4">
      <HeaderBanner HeaderBannerData={headerSectionData} />
    </div>
  );
}

export default ContactUsPage;
