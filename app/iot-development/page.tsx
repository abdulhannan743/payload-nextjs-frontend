import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import IoTDevelopment from "@/components/IoTDevelopment";

async function IoTDevelopmentPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.IOT_DEVELOPMENT),
    method: "GET",
  });
  const IoTDevelopmentData = response?.docs[0].layout;
  return <IoTDevelopment IoTDevelopmentData={IoTDevelopmentData} />;
}

export default IoTDevelopmentPage;
