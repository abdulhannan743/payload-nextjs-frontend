import UI_UX from "@/components/ui-ux";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import React from "react";

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
