import React from "react";
import ERPSolution from "@/components/Solutions";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

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
