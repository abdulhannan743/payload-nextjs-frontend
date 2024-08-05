import { Metadata } from "next";

import HeroSection from "@/components/sharedComponents/HeroSection";
import TwoColumnSection from "@/components/sharedComponents/TwoColumnSection";
import WhyAllZoneSection from "@/components/Home/WhyAllZoneSection";
import ServicesSection from "@/components/Home/ServicesSection";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.FINTECH);
  return fetchMetadata(url);
}
export default async function FintechPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.FINTECH),
    method: "GET",
  });
  const fintechData = response?.docs[0].layout;

  const heroSectionData = fintechData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const servicesWeOffer = fintechData?.find(
    (item: any) =>
      item?.blockName ===
      "Types of Financial Software Development Services We Offer"
  );
  const appDevelopment = fintechData?.find(
    (item: any) =>
      item?.blockName ===
      "What Are The Key Components of AllZone Technologies Fintech App Development?"
  );
  const customSoftwareDevelopment = fintechData?.find(
    (item: any) =>
      item?.blockName ===
      "Why is AllZone Technologies a Hallmark of Custom Financial Software Development?"
  );
  const typesOfFintech = fintechData?.find(
    (item: any) =>
      item?.blockName ===
      "Types of Fintech Applications We Develop for Our Clients"
  );
  const considerBeforeOutsourcing = fintechData?.find(
    (item: any) =>
      item?.blockName ===
      "What to Consider Before Outsourcing a Fintech Application Development Company?"
  );

  const twoColumnData = [
    servicesWeOffer,
    appDevelopment,
    customSoftwareDevelopment,
  ];

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <TwoColumnSection twoColumnSectionData={twoColumnData} />
      <WhyAllZoneSection whyAllzoneData={typesOfFintech} />
      <ServicesSection
        serviceData={considerBeforeOutsourcing}
        isBackgroundWhite={true}
      />
    </div>
  );
}
