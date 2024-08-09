"use client";
import React from "react";
import Image from "next/image";
import type { CustomDevelopmentData } from "@/src/types/IotDevelopmentTypes";
import DottedLine from "../ui/DottedLine";
import IoTProcessLine1 from "../../public/assets/images/IoTProcessLine1.png";
import ProcessIoTLine2 from "../../public/assets/images/ProcessIoTLine2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomDevelopmentProps {
  data: CustomDevelopmentData;
}

const CustomDevelopment: React.FC<CustomDevelopmentProps> = ({ data }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const CustomDevelopmentCard = (item: any, index: number) => {
    return (
      <div className="pt-8 w-[100vw] h-4/5 flex flex-col text-white px-24 snap-start">
        <div className="lg:w-2/3 w-full flex flex-col items-start justify-between">
          <h2 className="mb-3">{data?.heading}</h2>
          <DottedLine />
          <p className="mt-3">{data?.text}</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center mt-16">
            <div className="hidden lg:block">
              {index !== 0 && (
                <Image
                  src={ProcessIoTLine2}
                  alt="dotted line"
                  width={300}
                  height={100}
                />
              )}
            </div>
            <div className="bg-zink p-6 rounded-lg shadow-lg w-full ml-4">
              <Image
                src={item?.item?.icon?.url}
                alt={item?.item?.icon?.alt}
                width={50}
                height={50}
              />
              <h3 className="mt-4 mb-2 text-secondary">
                {item?.item?.heading}
              </h3>
              <p>{item?.item?.text}</p>
            </div>
          </div>
          <div className="w-full lg:w-full md:w-1/2 mt-16 md:mt-0 md:ml-8 flex flex-row items-center">
            <Image
              src={item?.item?.image?.url || ""}
              alt={item?.item?.image?.alt || ""}
              width={400}
              height={400}
            />
            <div className="hidden lg:block mt-16">
              <Image
                src={IoTProcessLine1}
                alt="dotted line"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    const stickyParent = document.querySelector(
      ".sticky-parent"
    ) as HTMLElement;
    const scrollSection = containerRef.current;

    if (!stickyParent || !scrollSection) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyParentTop =
        stickyParent.getBoundingClientRect().top + window.scrollY;
      const stickyParentHeight = stickyParent.offsetHeight;

      if (scrollTop < stickyParentTop) {
        return;
      }

      const scrollPercent = Math.min(
        (scrollTop - stickyParentTop) / stickyParentHeight,
        1
      );

      const maxScrollLeft =
        scrollSection.scrollWidth - scrollSection.clientWidth;
      const scrollLeft = scrollPercent * maxScrollLeft;

      scrollSection.scrollTo({ left: scrollLeft * 1.5, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  return (
    <div className="sticky-parent">
      <div className="sticky-child relative">
        <div className="absolute top-0 right-0">
          <Image
            src="/assets/images/semiOval.png"
            alt="vector"
            width={200}
            height={200}
          />
        </div>
        <div ref={containerRef} className="scroll-section">
          {data.layout.map((item: any, index: number) => (
            <CustomDevelopmentCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopment;
