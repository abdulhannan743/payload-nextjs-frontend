import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import EnterpriseDataAndAnalytics from "@/components/EnterpriseDataAndAnalyticsPage";

async function EnterpriseDataAndAnalyticsPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.ENTERPRISE_DATA_AND_ANALYTICS),
    method: "GET",
  });
  const enterpriseDataPageData = response?.docs[0].layout;

  return (
    <>
      <EnterpriseDataAndAnalytics
        enterpriseDataPageData={enterpriseDataPageData}
      />
    </>
  );
}

export default EnterpriseDataAndAnalyticsPage;
