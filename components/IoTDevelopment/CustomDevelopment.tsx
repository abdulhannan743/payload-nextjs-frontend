"use client";
import React from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500,
  };

  return (
    <div className="bg-[#0D2234] overflow-hidden">
      <Slider {...settings}>
        {data?.layout?.map((item, index: number) => (
          <div key={index} className="py-8">
            <div className=" container flex flex-col md:flex-row text-white px-4 md:px-10">
              <div className="pt-8 ">
                <div className="lg:w-2/3 w-full flex flex-col items-start justify-between">
                  <h2 className="mb-3">{data.heading}</h2>
                  <DottedLine />
                  <p className="mt-3">{data.text}</p>
                </div>
                <div className="flex flex-col lg:flex-row  ">
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
                    <div className="bg-zink p-6 rounded-lg shadow-lg w-full ml-4 ">
                      <Image
                        src={item.icon.url}
                        alt={item.icon.alt}
                        width={item.icon.width}
                        height={item.icon.height}
                      />
                      <h3 className="mt-4 mb-2 text-secondary">
                        {item.heading}
                      </h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-full md:w-1/2  mt-16 md:mt-0 md:ml-8 flex flex-row items-center ">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomDevelopment;
