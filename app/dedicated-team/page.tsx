import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import DedicatedTeam from "@/components/DedicatedTeam";

async function DedicatedTeamPage() {
  const response: AboutUsResponse = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.DEDICATED_TEAM),
    method: "GET",
  });
  const DedicatedTeamData: AboutLayoutItemType[] =
    response?.docs.find((item) => item.slug === "dedicated-team")?.layout || [];

  return (
    <>
      <DedicatedTeam DedicatedTeamData={DedicatedTeamData} />
    </>
  );
}

export default DedicatedTeamPage;
