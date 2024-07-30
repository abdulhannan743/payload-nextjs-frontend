import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import HealthCare from "@/components/Health-Care";

async function HealthCarePage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HEALTH_CARE),
    method: "GET",
  });
  const healthCareData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "healthcare")?.layout || [];

  return <HealthCare healthCareData={healthCareData} />;
}

export default HealthCarePage;
