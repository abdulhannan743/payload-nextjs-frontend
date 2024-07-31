"use client";
import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import { useWindowSize } from "@/src/utils/useWindowSizeForResponsiveness";

type AnalyticsProps = {
  analyticsData: AboutLayoutItemType | undefined;
};

function isAnalyticsSectionLayout(
  data: AboutLayoutItemType | undefined
): data is AboutLayoutItemType {
  return (data as AboutLayoutItemType)?.content !== undefined;
}

const Analytics = ({ analyticsData }: AnalyticsProps) => {
  const [activeBlock, setActiveBlock] = React.useState<number>(0);
  const windowSize = useWindowSize();

  if (!isAnalyticsSectionLayout(analyticsData)) {
    return null;
  }

  let filteredTabs;

  const previousBlock = () => {
    const currentIndex =
      analyticsData?.content.findIndex(
        (tab, index: number) => index === activeBlock
      ) || 0;

    const prevIndex =
      (currentIndex - 1 + analyticsData?.content.length) %
      analyticsData?.content.length;

    const prevTab = analyticsData?.content[prevIndex];

    filteredTabs = prevTab;
    setActiveBlock(prevIndex);
  };
  const nextBlock = () => {
    const currentIndex =
      analyticsData?.content.findIndex(
        (tab: any, index: number) => index === activeBlock
      ) || 0;

    const nextIndex = (currentIndex + 1) % analyticsData?.content.length;

    console.log("nextIndex", nextIndex);

    const nextTab = analyticsData?.content[nextIndex];

    filteredTabs = nextTab;
    setActiveBlock(nextIndex);
  };

  const activeIndex =
    analyticsData?.content.findIndex(
      (tab: any, index: number) => index === activeBlock
    ) || 0;

  if (windowSize.width >= 1024) {
    filteredTabs = analyticsData?.content;
  } else if (windowSize.width >= 768) {
    const endIndex = (activeIndex + 4) % analyticsData?.content.length;
    filteredTabs =
      endIndex >= activeIndex
        ? analyticsData?.content.slice(activeIndex, endIndex)
        : [
            ...analyticsData?.content.slice(activeIndex),
            ...analyticsData?.content.slice(0, endIndex),
          ];
  } else {
    const nextIndex = (activeIndex + 1) % analyticsData?.content.length;
    filteredTabs = [analyticsData?.content[activeIndex]];
  }

  return (
    <div className="w-full bg-[#0D2234] py-16 relative flex justify-center">
      <Image
        src="./lightGreenStyle.svg"
        alt="style"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-auto h-auto"
      />
      <div className="">
        <div className="w-full m-auto">
          <div className="text-secondary text-2xl lg:text-4xl text-center font-medium pb-5">
            {analyticsData?.heading}
          </div>
          <DottedLine />

          <div className="text-white py-5  text-center text-wrap">
            {analyticsData?.text}
          </div>
        </div>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5
           lg:gap-x-5 xl:gap-x-36 
         lg:gap-y-20  mt-5"
        >
          {filteredTabs?.map((item, index: number) => {
            return (
              <div
                className="w-80 h-32 bg-[#0F333E] flex items-center justify-start rounded-lg px-3 m-auto"
                key={index}
              >
                <Image
                  src={item?.image?.url}
                  alt="ai"
                  width={10}
                  height={10}
                  className="w-10 text-white"
                />
                <hr className="w-12 h-0.5 bg-slate-400 block mx-5" />
                <div className=" text-white font-bold text-xl ">
                  {item?.heading}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-row justify-end mt-5 lg:hidden">
          <div
            className="text-white cursor-pointer mr-2"
            onClick={previousBlock}
          >
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

          <div className="text-white cursor-pointer ml-2" onClick={nextBlock}>
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
    </div>
  );
};

export default Analytics;
