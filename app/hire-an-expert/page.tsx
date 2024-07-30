import React from "react";
import HireAnExpert from "@/components/HireAnExpert";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
async function HireAnExpertPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HIRE_AN_EXPERT),
    method: "GET",
  });
  const hireAnExpertPageData = response?.docs[0].layout;
  return <HireAnExpert hireAnExpertPageData={hireAnExpertPageData} />;
}

export default HireAnExpertPage;
