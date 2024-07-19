import React from "react";
import MobileApplicationServices from "@/components/MobileApplicationServices";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

async function MobileApplicationServicesPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.MOBIL_APPLICATION_SERVICES),
    method: "GET",
  });
  const mobileApplicationServicesData = response?.docs[0].layout;
  return (
    <>
      <MobileApplicationServices
        mobileApplicationServicesData={mobileApplicationServicesData}
      />
    </>
  );
}

export default MobileApplicationServicesPage;
