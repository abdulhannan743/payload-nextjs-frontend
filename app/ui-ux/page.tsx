import React from "react";
import { Metadata } from "next";

import UI_UX from "@/components/ui-ux";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { RESOURCE_TYPES } from "@/src/constants/common";

import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.UI_UX);
  return fetchMetadata(url);
}
const page = async () => {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.UI_UX),
    method: "GET",
  });

  const uiUxPageData = response?.docs[0].layout;

  return (
    <>
      <UI_UX uiUxPageData={uiUxPageData} />
    </>
  );
};

export default page;
