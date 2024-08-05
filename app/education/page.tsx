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
  const url = getPageURL(RESOURCE_TYPES.EDUCATION);
  return fetchMetadata(url);
}
export default async function EducationPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.EDUCATION),
    method: "GET",
  });
  const educationData = response?.docs[0].layout;

  const heroSectionData = educationData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const servicesWeOffer = educationData?.find(
    (item: any) =>
      item?.blockName ===
      "Our Multidimensional eLearning App Development Services"
  );
  const technologiesWeUse = educationData?.find(
    (item: any) =>
      item?.blockName ===
      "Technologies We Use for eLearning Software Development"
  );
  const whyAllzoneBest = educationData?.find(
    (item: any) =>
      item?.blockName ===
      "Why is AllZone Technologies the best eLearning Software Development Company to Outsource Developers?"
  );
  const featuresOfeLearning = educationData?.find(
    (item: any) =>
      item?.blockName ===
      "Get Top Quality Features in Your eLearning Application"
  );
  const considerBeforeOutsourcing = educationData?.find(
    (item: any) =>
      item?.blockName ===
      "What Makes Our eLearning Software Development Company Best in the Business?"
  );

  const twoColumnData = [servicesWeOffer, technologiesWeUse, whyAllzoneBest];

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <TwoColumnSection twoColumnSectionData={twoColumnData} />
      <WhyAllZoneSection whyAllzoneData={featuresOfeLearning} />
      <ServicesSection
        serviceData={considerBeforeOutsourcing}
        isBackgroundWhite={true}
      />
    </div>
  );
}
