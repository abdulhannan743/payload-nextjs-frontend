import React from "react";
import { Metadata } from "next";

import DedicatedTeam from "@/components/DedicatedTeam";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import type {
  AboutLayoutItemType,
  AboutUsResponse,
} from "@/src/types/AboutUsTypes";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.DEDICATED_TEAM);
  return fetchMetadata(url);
}
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
