import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";
import ClientsSection from "./ClientsSection";
import HeroSection from "./HeroSection";
import type { HeroSectionType } from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import IndustriesFAQCard from "./IndustriesFAQCard";
import ContactUsSection from "./ContactUsSection";
import IndustriesServicesCard from "./IndustriesServicesCard";
import { formSectionData } from "@/src/constants/HomePageData";

type HomeProps = {
  homePageData: any;
};

export default function Home({ homePageData }: HomeProps) {
  const servicesData = homePageData?.find(
    (item: any) => item?.blockName === "Services Section"
  );
  const whyAllzoneData = homePageData?.find(
    (item: any) => item?.blockName === "Why Allzone Section"
  );
  const clientsData = homePageData?.find(
    (item: any) => item?.blockName === "Our Clients"
  );

  const heroData: HeroSectionType[] = homePageData?.filter(
    (item: any) => item?.blockName === "Hero Section"
  );

  const portfolioData = homePageData?.find(
    (item: any) => item?.blockName === "Our Work"
  );
  const matadata = homePageData?.find(
    (item: any) => item?.blockName === "Industries FAQ's Section"
  );

  const industries = homePageData?.find(
    (item: any) => item?.blockName === "Industries Services Section"
  );

  const contactForm = homePageData?.find(
    (item: any) => item?.blockName === "Contact Us Form "
  );
  return (
    <div className="bg-white">
      <HeroSection heroData={heroData} />
      <ServicesSection serviceData={servicesData} />
      <IndustriesServicesCard industries={industries} />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
      <PortfolioSection portfolioData={portfolioData} />
      <ClientsSection clientsData={clientsData} />
      <ContactUsSection {...contactForm} />
      <IndustriesFAQCard matadata={matadata} />
    </div>
  );
}
