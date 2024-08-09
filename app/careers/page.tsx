import React from "react";
import { Metadata } from "next";

import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import { getPageURL } from "@/src/utils";
import Careers from "@/components/Careers";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.CAREERS);
  return fetchMetadata(url);
}
async function CareersPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.CAREERS),
    method: "GET",
  });
  const CareersData = response?.docs[0].layout;
  return (
    <>
      <div>
        <Careers CareersData={CareersData} />
      </div>
    </>
  );
}

export default CareersPage;
