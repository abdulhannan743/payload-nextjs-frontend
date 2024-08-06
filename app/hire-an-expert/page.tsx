import React from "react";
import { Metadata } from "next";

import HireAnExpert from "@/components/HireAnExpert";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.HIRE_AN_EXPERT);
  return fetchMetadata(url);
}
async function HireAnExpertPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HIRE_AN_EXPERT),
    method: "GET",
  });
  const hireAnExpertPageData = response?.docs[0].layout;
  return <HireAnExpert hireAnExpertPageData={hireAnExpertPageData} />;
}

export default HireAnExpertPage;
