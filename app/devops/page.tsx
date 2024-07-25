import Devops from "@/components/devops";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import React from "react";

const page = async () => {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.DEVOPS),
    method: "GET",
  });
  const DevopsPageData = response?.docs[0].layout;
  return (
    <div>
      <Devops DevopsPageData={DevopsPageData} />
    </div>
  );
};

export default page;
