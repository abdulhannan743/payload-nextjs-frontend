import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import RenderDescription from "../sharedComponents/RenderDescription";
import type { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

interface SolutionProviderProps {
  solutionProvidersData: ServiceBlockType;
}
const SolutionProvider = ({ solutionProvidersData }: SolutionProviderProps) => {
  return (
    <div className="container py-16">
      {solutionProvidersData?.items?.map((item, index) => (
        <div key={item?.id}>
          <div
            className={`flex gap-4 flex-col md:flex-row md:${
              index % 2 !== 0 && "flex-row-reverse"
            } items-center mb-10`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={item?.image?.url || ""}
                alt={item?.image?.alt || ""}
                width={700}
                height={700}
              />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-lightDark">
                {item?.title}
              </h2>
              <div className="flex justify-start ">
                <DottedLine />
              </div>
              {item?.description && (
                <RenderDescription description={item?.description} />
              )}

              {item.slider?.map((data) => {
                return (
                  <div key={data.id}>
                    <div>
                      <h3 className="text-secondary">Partners:</h3>
                    </div>
                    <div className="flex items-center">
                      {data?.slides?.map((image) => {
                        return (
                          <div className="w-16 mr-5" key={data.id}>
                            <Image
                              src={image?.media.url}
                              alt={image?.media.alt}
                              width={100}
                              height={100}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionProvider;
