import React from "react";
import { Metadata } from "next";

import ERPSolution from "@/components/Solutions";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.SOLUTIONS);
  return fetchMetadata(url);
}

const SolutionsPage = async () => {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.SOLUTIONS),
    method: "GET",
  });
  const ERPSolutionData = response?.docs[0]?.layout;
  return (
    <div>
      <ERPSolution ERPSolutionData={ERPSolutionData} />
    </div>
  );
};
export default SolutionsPage;
