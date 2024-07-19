"use client";
import React from "react";
import { Button } from "../ui/button";
import { ServiceType } from "@/src/types/ServicesTypes";
import { CustomLink, PageLink } from "@/src/types/ServiceBlockTypes";
import Link from "next/link";

type Link = PageLink;

type ServiceSectionProps = {
  backgroundDark?: boolean;
  serviceSectionData: ServiceType;
};

function ServiceSection({
  serviceSectionData,
  backgroundDark = false,
}: ServiceSectionProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  const renderLinks = (links: Link[], backgroundDark: boolean) => (
    <>
      <Button
        variant={backgroundDark ? "secondary" : "default"}
        className={`text-white`}
      >
        <Link href={links[0]?.page?.slug || ""}>{links[0]?.label}</Link>
      </Button>
      <Button
        variant={"outline"}
        className={`${
          backgroundDark ? "border-secondary" : "border-primary"
        } text-${backgroundDark ? "secondary" : "primary"}
            bg-${backgroundDark ? "[#0D2234]" : "white"} `}
      >
        <Link href={links[1]?.page?.slug || ""}>{links[1]?.label}</Link>
      </Button>
    </>
  );

  const renderDescription = (description: string, backgroundDark: boolean) => {
    const [mainParagraph, ...features] = description.split("\n");
    return (
      <div className="text-md md:text-lg">
        <p>{mainParagraph}</p>
        <ul className="list-disc ml-5 mt-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`py-1 marker:text-2xl marker:text-${
                backgroundDark ? "secondary" : "primary"
              }`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`${backgroundDark ? "bg-[#0D2234]" : ""} py-16`}>
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={`/assets/icons/${serviceSectionData.iconName}.svg`}
            alt={`${serviceSectionData.iconName} icon`}
          />
          <h1
            className={`text-2xl md:text-4xl font-bold ${
              backgroundDark ? "text-secondary" : "text-primary"
            }`}
          >
            {serviceSectionData.title}
          </h1>
        </div>
        <hr className="bg-[#20C89766] border-none h-[1px] w-full my-4" />
        <div className="flex pt-6 justify-between">
          <ul>
            {serviceSectionData.tabs.map((tab, index) => (
              <div key={index}>
                <li
                  className={`relative flex items-center cursor-pointer py-3 font-bold text-md ${
                    index === activeTab ? "active" : ""
                  } ${
                    index === activeTab
                      ? backgroundDark
                        ? "text-secondary"
                        : "text-primary"
                      : backgroundDark
                      ? "text-white"
                      : "text-[#66666680]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span
                    className={`dot w-4 h-4 rounded-full mr-3 ${
                      index === activeTab
                        ? backgroundDark
                          ? "bg-secondary"
                          : "bg-primary"
                        : backgroundDark
                        ? "bg-white"
                        : "bg-[#66666680]"
                    }`}
                  ></span>
                  {tab.heading}
                  {index < serviceSectionData.tabs.length - 1 && (
                    <span
                      className={`absolute left-2 top-8 h-2/3 hidden lg:inline border-r border-dashed`}
                    ></span>
                  )}
                </li>
                {index === activeTab && (
                  <div className="md:hidden">
                    <h2
                      className={`text-2xl md:text-4xl font-bold max-w-4xl mb-4 ${
                        backgroundDark ? "text-white" : "text-[#1D2746]"
                      }`}
                    >
                      {tab.title}
                    </h2>
                    <div
                      className={`${
                        backgroundDark ? "text-white" : "text-[#666666]"
                      }`}
                    >
                      {tab?.description &&
                        renderDescription(tab?.description, backgroundDark)}
                    </div>
                    <div className="mt-4 flex gap-6">
                      {renderLinks(tab?.link, backgroundDark)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
          <div className="w-3/4 hidden md:block">
            <h2
              className={`text-2xl md:text-4xl font-bold max-w-4xl mb-4 ${
                backgroundDark ? "text-white" : "text-[#1D2746]"
              }`}
            >
              {serviceSectionData.tabs[activeTab].title}
            </h2>
            <div
              className={`${backgroundDark ? "text-white" : "text-[#666666]"}`}
            >
              {serviceSectionData.tabs[activeTab].description &&
                renderDescription(
                  serviceSectionData.tabs[activeTab].description,
                  backgroundDark
                )}
            </div>
            <div className="mt-4 flex gap-6">
              {renderLinks(
                serviceSectionData.tabs[activeTab].link,
                backgroundDark
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
