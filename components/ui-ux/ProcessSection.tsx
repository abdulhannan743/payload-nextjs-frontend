"use client";
import React, { useRef, useEffect, useCallback } from "react";
import DottedLine from "../ui/DottedLine";
import { LayoutItemType } from "@/src/types/CommonTypes";
import Image from "next/image";

interface ProcessSectionProps {
  processSectionData: LayoutItemType | undefined;
}

const ProcessSection = ({ processSectionData }: ProcessSectionProps) => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const topCircleRef = useRef<HTMLDivElement | null>(null);
  const bottomCircleRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const line = lineRef.current;
    const items = itemsRef.current;
    let maxHeight = 0;
    let lastActiveIndex = -1;

    items.forEach((item, index) => {
      if (item) {
        const itemTop = item.getBoundingClientRect().top + window.scrollY;
        const itemHeight = item.offsetHeight;

        if (scrollY + window.innerHeight / 2 > itemTop + itemHeight / 2) {
          maxHeight = itemTop + itemHeight / 2 - window.innerHeight / 2;
          lastActiveIndex = index;
          items[index].classList.add("active");
        } else {
          items[index].classList.remove("active");
        }
      }
    });

    if (line) {
      line.style.height = `${maxHeight + window.innerHeight / 2}px`;
    }

    items.forEach((item, index) => {
      if (item) {
        const lineSegment = item.querySelector(".line-segment");
        const headingElement = item.querySelector(".heading");
        const imageElement = item.querySelector(".svg-image");

        if (lineSegment) {
          lineSegment.classList.toggle("bg-blue-500", index <= lastActiveIndex);
        }
        if (headingElement) {
          headingElement.classList.toggle(
            "active-heading",
            index <= lastActiveIndex
          );
        }
        if (imageElement) {
          imageElement.classList.toggle("svg-filter", index <= lastActiveIndex);
        }
      }
    });

    if (topCircleRef.current) {
      topCircleRef.current.classList.toggle(
        "bg-blue-500",
        lastActiveIndex !== -1
      );
    }
    if (bottomCircleRef.current) {
      bottomCircleRef.current.classList.toggle(
        "bg-blue-500",
        lastActiveIndex === items.length - 1
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="my-12 container mx-auto">
      <div className="max-w-6xl m-auto">
        <div className="text-[#20C897] text-2xl md:text-4xl font-bold py-3 text-center">
          {processSectionData?.heading}
        </div>
        <div className="my-5">
          <DottedLine />
        </div>
        <div className="text-center">{processSectionData?.text}</div>
      </div>

      <div className="relative container mx-auto p-6">
        <div className="relative z-10">
          <div
            ref={topCircleRef}
            id="circle"
            className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 z-20"
            style={{ top: "-0.5rem" }}
          ></div>

          {processSectionData?.layout.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className={`flex md:items-center md:justify-between relative pl-5 max-w-5xl ${
                index % 2 !== 0
                  ? "md:text-right m-auto md:pr-16"
                  : "md:flex-row-reverse text-left m-auto "
              }`}
            >
              <div className="md:w-[320px] lg:w-[480px] md:px-10 text-slate-500 py-10">
                <div
                  className={`${
                    index % 2 !== 0
                      ? "flex justify-center flex-col md:items-end"
                      : ""
                  }`}
                >
                  <Image
                    src={item.image?.url || ""}
                    alt={item.image?.alt || ""}
                    width={40}
                    height={40}
                    className="svg-image"
                  />
                </div>
                <div className="font-bold text-xl my-2 heading text-[#A0A2A6]">
                  {item.heading}
                </div>
                <div className="text-[15px] ">{item.text}</div>
              </div>
              <div className="lg:w-1/2 lg:pl-8"></div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-1 h-full line-segment border-l-2 border-black border-dashed"></div>
            </div>
          ))}

          <div
            ref={bottomCircleRef}
            className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 z-20"
            style={{ bottom: "-0.5rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
