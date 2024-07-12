import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import Services from "@/components/Services";

async function ServicesPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.SERVICES),
    method: "GET",
  });
  const servicesPageData = response?.docs[0].layout;
  return (
    <>
      <Services servicesPageData={servicesPageData} />
    </>
  );
}

export default ServicesPage;
