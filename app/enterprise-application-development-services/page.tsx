import React from "react";
import { Metadata } from "next";

import EnterpriseSoftwareServices from "@/components/EnterpriseSoftwareServices";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.ENTERPRISE_SOFTWARE_SERVICES);
  return fetchMetadata(url);
}
async function EnterpriseSoftwareServicesPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.ENTERPRISE_SOFTWARE_SERVICES),
    method: "GET",
  });
  const enterpriseSoftwareServicesData = response?.docs[0].layout;
  return (
    <EnterpriseSoftwareServices
      enterpriseSoftwareServicesData={enterpriseSoftwareServicesData}
    />
  );
}

export default EnterpriseSoftwareServicesPage;
