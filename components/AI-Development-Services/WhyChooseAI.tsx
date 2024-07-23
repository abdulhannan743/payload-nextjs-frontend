import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DottedLine from "../ui/DottedLine";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import Image from "next/image";
import DevelopmentModelImage from "../../public/images/DevelopmentModel.png";

type WhyChooseAIProps = {
  WhyChooseAIData: ServiceBlockType;
};

function WhyChooseAI({ WhyChooseAIData }: WhyChooseAIProps) {
  return (
    <div className="py-16">
      <div className="container flex flex-col gap-6 justify-between px-0 lg:flex-row">
        <div className="flex flex-col gap-4 items-baseline w-full lg:w-1/2 px-10">
          <h1 className="lg:text-4xl font-bold text-[#1D2746] text-3xl">
            {WhyChooseAIData.title}
          </h1>
          <DottedLine />
          <p className="text-gray lg:text-lg text-base">
            {WhyChooseAIData.description}
          </p>
        </div>

        <div className="w-full px-10 flex flex-col gap-8 lg:w-1/2">
          {WhyChooseAIData.items.map((item, index) => (
            <div key={index} className="text-primary flex flex-col gap-2">
              {index === 0 ? (
                <p className="lg:text-xl font-bold text-gray text-base">
                  {item.title}
                </p>
              ) : (
                <p className="lg:text-xl font-medium text-base">{item.title}</p>
              )}
              {index !== 0 && (
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: item.title }}
                  ></div>
                </div>
              )}
              <p className="lg:text-xl text-gray text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseAI;
