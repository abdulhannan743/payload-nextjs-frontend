import React from "react";
import { Metadata } from "next";

import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.TECHNOLOGIES);
  return fetchMetadata(url);
}
async function TechnologiesPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.TECHNOLOGIES),
    method: "GET",
  });
  const homeData = response?.docs[0].layout;
  return (
    <>
      {homeData?.map((data: any) => (
        // just for the time being
        <div key={data?.id}>
          <h3 className="text-lg font-bold text-primary mb-2">
            {data?.heading}
          </h3>
          <p className="text-sm text-gray text-wrap">{data?.text}</p>
        </div>
      ))}
    </>
  );
}

export default TechnologiesPage;
