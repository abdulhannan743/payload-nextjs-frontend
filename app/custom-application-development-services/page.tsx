import React from "react";
import { Metadata } from "next";

import MobileApplicationServices from "@/components/MobileApplicationServices";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.MOBILE_APPLICATION_SERVICES);
  return fetchMetadata(url);
}
async function MobileApplicationServicesPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.MOBILE_APPLICATION_SERVICES),
    method: "GET",
  });
  const mobileApplicationServicesData = response?.docs[0].layout;
  return (
    <MobileApplicationServices
      mobileApplicationServicesData={mobileApplicationServicesData}
    />
  );
}

export default MobileApplicationServicesPage;
