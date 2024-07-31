import HeroSection from "@/components/sharedComponents/HeroSection";
import TwoColumnSection from "@/components/sharedComponents/TwoColumnSection";
import WhyAllZoneSection from "@/components/Home/WhyAllZoneSection";
import ServicesSection from "@/components/Home/ServicesSection";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";

export default async function InsurancePage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.INSURANCE),
    method: "GET",
  });
  const insuranceData = response?.docs[0].layout;

  const heroSectionData = insuranceData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const servicesWeOffer = insuranceData?.find(
    (item: any) =>
      item?.blockName ===
      "Unveiling the Secrets of Our Insurance App Development"
  );
  const appDevelopment = insuranceData?.find(
    (item: any) =>
      item?.blockName ===
      "Types of Insurance Applications We Develop for Mobile & Web"
  );
  const customSoftwareDevelopment = insuranceData?.find(
    (item: any) =>
      item?.blockName ===
      "Why is AllZone Technologies Best for Insurance Mobile App Development?"
  );
  const typesOfFintech = insuranceData?.find(
    (item: any) =>
      item?.blockName ===
      "Top Features in Our Insurance Software Development Services"
  );
  const considerBeforeOutsourcing = insuranceData?.find(
    (item: any) =>
      item?.blockName ===
      "Insurance Application Development Advantages Being a Partner with AllZone Technologies?"
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
