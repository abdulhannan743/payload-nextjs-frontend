import React from "react";
import { Metadata } from "next";

import Devops from "@/components/devops";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.DEVOPS);
  return fetchMetadata(url);
}

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
