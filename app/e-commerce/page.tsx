import HeroSection from "@/components/sharedComponents/HeroSection";
import TwoColumnSection from "@/components/sharedComponents/TwoColumnSection";
import WhyAllZoneSection from "@/components/Home/WhyAllZoneSection";
import ServicesSection from "@/components/Home/ServicesSection";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";

export default async function ECommercePage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.ECOMMERCE),
    method: "GET",
  });
  const eCommerceData = response?.docs[0].layout;

  const heroSectionData = eCommerceData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const ecommerceServices = eCommerceData?.find(
    (item: any) =>
      item?.blockName ===
      "Full-Featured E-commerce Development Services to Boost Your Business"
  );
  const ecommerceDevelopment = eCommerceData?.find(
    (item: any) =>
      item?.blockName ===
      "What Advanced Technologies We Used for E-commerce Development?"
  );
  const topSolution = eCommerceData?.find(
    (item: any) =>
      item?.blockName === "E-commerce Development Company’s Top Solutions"
  );
  const businessGoals = eCommerceData?.find(
    (item: any) =>
      item?.blockName ===
      "AllZone Technologies Outsource E-commerce Developers to Help You Achieve Business Goals."
  );
  const typesOfECommerce = eCommerceData?.find(
    (item: any) =>
      item?.blockName ===
      "Types of E-commerce Businesses We Cater for Development Process"
  );

  const twoColumnData = [ecommerceServices, ecommerceDevelopment, topSolution];

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <TwoColumnSection twoColumnSectionData={twoColumnData} />
      <WhyAllZoneSection whyAllzoneData={businessGoals} />
      <ServicesSection
        serviceData={typesOfECommerce}
        isBackgroundWhite={true}
      />
    </div>
  );
}
