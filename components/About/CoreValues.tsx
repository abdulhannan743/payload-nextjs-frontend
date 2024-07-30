"use client";

import Image from "next/image";
import React from "react";
import styledBox from "../../public/images/RightBox.png";
import squareVector from "../../public/images/Vector.png";
import dotsStyle from "../../public/images/Group 39932.png";
import Hamburger from "../../public/images/Hamburger.png";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import DottedLine from "../ui/DottedLine";
import { useWindowSize } from "@/src/utils/useWindowSizeForResponsiveness";

type CoreValuesSectionProps = {
  CoreValuesSectionData: AboutLayoutItemType | undefined;
};

type tabsDataTypes = {
  value: string;
  name: string;
};

const tabsData: tabsDataTypes[] = [
  { value: "01", name: "Leadership" },
  { value: "02", name: "Commitments" },
  { value: "03", name: "Quality" },
  { value: "04", name: "Teamwork" },
  { value: "05", name: "Innovation" },
  { value: "06", name: "Respect" },
];

const CoreValues = ({ CoreValuesSectionData }: CoreValuesSectionProps) => {
  const coreValuesData = CoreValuesSectionData?.content[0].layout;

  const InitialData = coreValuesData?.find(
    (item) => item.blockName === "Leadership"
  );

  const [activeLink, setActiveLink] = React.useState<string>("Leadership");
  const [activeSection, setActiveSection] = React.useState<string>("01");
  const [activeSectionInfo, setActiveSectionInfo] = React.useState<
    AboutLayoutItemType | undefined
  >(InitialData);

  const nextSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const nextIndex = (currentIndex + 1) % tabsData.length;

    const nextTab = tabsData[nextIndex];

    const nextActiveSection = coreValuesData?.find(
      (item) => item.blockName === nextTab.name
    );
    setActiveLink(nextTab.name);
    setActiveSection(nextTab.value);
    setActiveSectionInfo(nextActiveSection);
  };
  const previousSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const prevIndex = (currentIndex - 1 + tabsData.length) % tabsData.length;

    const prevTab = tabsData[prevIndex];

    const prevActiveSection = coreValuesData?.find(
      (item) => item.blockName === prevTab.name
    );
    setActiveLink(prevTab.name);
    setActiveSection(prevTab.value);
    setActiveSectionInfo(prevActiveSection);
  };

  const windowSize = useWindowSize();
  const activeIndex = tabsData.findIndex((tab) => tab.name === activeLink);

  let filteredTabs;
  if (windowSize.width >= 1024) {
    filteredTabs = tabsData;
  } else if (windowSize.width >= 768) {
    const endIndex = (activeIndex + 4) % tabsData.length;
    filteredTabs =
      endIndex >= activeIndex
        ? tabsData.slice(activeIndex, endIndex)
        : [...tabsData.slice(activeIndex), ...tabsData.slice(0, endIndex)];
  } else {
    const nextIndex = (activeIndex + 1) % tabsData.length;
    filteredTabs = [tabsData[activeIndex], tabsData[nextIndex]];
  }

  return (
    <div className="relative w-full my-16">
      <div className="flex flex-col align-middle justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D2746] mb-3">
          {CoreValuesSectionData?.heading}
        </h2>
        <DottedLine />
      </div>
      <div className="container flex gap-8 justify-between mt-4 overflow-hidden">
        {filteredTabs.map((tab: tabsDataTypes, index) => (
          <div
            key={index}
            onClick={() => {
              const activeData = coreValuesData?.find(
                (item) => item.blockName === tab.name
              );
              setActiveLink(tab.name);
              setActiveSection(tab.value);
              setActiveSectionInfo(activeData);
            }}
            className="text-base font-bold relative z-20"
          >
            <p
              className={`flex items-center justify-center text-gray ${
                activeLink === tab.name ? "text-primary" : ""
              } cursor-pointer`}
            >
              <span className="text-primary mr-1">{tab.value}</span>
              {tab.name}
            </p>
            <hr
              className={`w-6 h-6 lg:w-4 lg:h-4 rounded-full border ${
                activeLink === tab.name ? "bg-primary" : "bg-white"
              } mt-3`}
            />
          </div>
        ))}
        <div className="absolute inset-y-28 inset-x-0 w-full h-0.5 bg-[#E9EDF5]"></div>
      </div>

      <div className="w-full absolute inset-y-48 md:inset-y-56 lg:inset-y-44 xl:inset-y-48">
        <div className="container w-full lg:w-2/3 flex flex-row justify-between lg:mb-3 mb-2">
          <div className="w-4 md:w-16">
            <Image src={dotsStyle} alt="dots" />
          </div>
          <div className="w-4 md:w-16">
            <Image src={Hamburger} alt="Hamburger" />
          </div>
        </div>
        <hr className="container h-0.5 xl:h-1 bg-[#CACACA] lg:w-2/3 w-[85%] md:w-[92%] rounded-full" />
      </div>

      <div className="w-full mt-8 xl:container">
        <div className="realtive flex flex-row items-center justify-between px-4">
          <div className="lg:w-80 w-8 md:w-40 ">
            <Image src={styledBox} alt="Styled Box" />
          </div>
          <div className="absolute w-64 md:w-96 lg:w-[480px] xl:w-[560px] h-40 inset-x-[12%] inset-y-[41%] lg:inset-x-[12%] xl:inset-x-[22%]">
            <Image src={squareVector} alt="squareBox" />
          </div>
          <div className="absolute inset-x-[16%] inset-y-[44%] lg:inset-x-[15%] lg:inset-y-[45%] w-64 h-40 md:w-96 lg:w-[480px] xl:w-[560px] xl:inset-x-[24%]">
            <Image
              src={activeSectionInfo?.image?.url || ""}
              width={activeSectionInfo?.image?.width}
              height={activeSectionInfo?.image?.height}
              alt={activeSectionInfo?.image?.alt || ""}
            />
          </div>

          <div className="h-96 w-72 md:w-[500px] md:h-[530px] lg:w-[650px]  xl:w-[806px] xl:h-[717px] bg-[rgba(32,200,151,0.1)] rounded-[24px] flex flex-col lg:flex-row gap-24 justify-around items-center">
            <div></div>
            <div className="xl:w-72 w-52 md:w-64">
              <h2 className="font-bold lg:text-3xl text-base text-[#1D2746] mb-3">
                {activeSectionInfo?.heading}
              </h2>
              <p className="text-gray lg:text-lg xl:text-xl text-xs">
                {activeSectionInfo?.text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:container absolute inset-y-[93%] inset-x-0 w-full flex flex-row justify-around">
        <div className="text-primary cursor-pointer" onClick={previousSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 lg:size-6 lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="lg:text-lg text-sm font-bold text-secondary">
            {activeSection.split("0")} / 6
          </p>
        </div>
        <div className="text-primary cursor-pointer" onClick={nextSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 lg:size-6 lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
