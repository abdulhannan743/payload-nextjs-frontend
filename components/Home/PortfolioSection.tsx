"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";
import {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";

type PortfolioProps = {
  portfolioData: ServiceBlockType;
};

const PortfolioCarousalCard = (item: ServiceBlockItemType) => (
  <div className="rounded-lg overflow-hidden">
    <Link
      href={item.link?.[0]?.url || "#"}
      className="block hover:text-primary hover:underline"
    >
      <div className="pb-12">
        <img
          src={item?.image?.url}
          alt={item?.image?.alt}
          className="w-full h-auto mb-3 object-cover"
        />
        <div className="flex items-center justify-between">
          <h4 className="text-md font-semibold">{item.link?.[0]?.label}</h4>
          <ArrowRightIcon className="w-6 h-6" />
        </div>
      </div>
    </Link>
  </div>
);

function PortfolioSection({ portfolioData }: PortfolioProps) {
  // just a dummy data for the time being
  portfolioData = {
    title: "Increase value through innovation",
    description:
      "Our finished projects include a comprehensive list of award-winning projects in various sectors. It makes us proud and uplifts our spirit to continue to craft excellent digital products.",
    items: [
      {
        title: "Tracy Hurley",
        description: "INTERWOOD Case Study",
        image: {
          id: "668beb30bb6983e66a8692ad",
          alt: "portfolio icon",
          filename: "Vector 26.png",
          mimeType: "image/png",
          filesize: 26419,
          width: 207,
          height: 284,
          createdAt: "2024-07-08T13:35:44.015Z",
          updatedAt: "2024-07-08T13:35:44.015Z",
          url: "http://localhost:4000/media/Vector 26.png",
        },
        link: [
          {
            type: "custom",
            label: "INTERWOOD Case Study",
            url: "#",
            id: "668be9207bc868663e2f6ec0",
          },
        ],
        id: "668be91a7bc868663e2f6ebf",
      },
      {
        title: "INTERWOOD Case Study",
        image: {
          id: "668beb71bb6983e66a8692b7",
          alt: "portfolio icon",
          filename: "Vector 27.png",
          mimeType: "image/png",
          filesize: 35362,
          width: 207,
          height: 284,
          createdAt: "2024-07-08T13:36:49.779Z",
          updatedAt: "2024-07-08T13:36:49.779Z",
          url: "http://localhost:4000/media/Vector 27.png",
        },
        link: [
          {
            type: "custom",
            label: "INTERWOOD Case Study",
            url: "#",
            id: "668beb5c7bc868663e2f6ec2",
          },
        ],
        id: "668beb3b7bc868663e2f6ec1",
      },
      {
        title: "INTERWOOD Case Study",
        image: {
          id: "668beb9dbb6983e66a8692c2",
          alt: "portfolio icon",
          filename: "Vector 26-1.png",
          mimeType: "image/png",
          filesize: 26419,
          width: 207,
          height: 284,
          createdAt: "2024-07-08T13:37:33.348Z",
          updatedAt: "2024-07-08T13:37:33.348Z",
          url: "http://localhost:4000/media/Vector 26-1.png",
        },
        link: [
          {
            type: "custom",
            label: "INTERWOOD Case Study",
            url: "#",
            id: "668beb9f7bc868663e2f6ec4",
          },
        ],
        id: "668beb7e7bc868663e2f6ec3",
      },
      {
        title: "INTERWOOD Case Study",
        image: {
          id: "668bebbebb6983e66a8692cd",
          alt: "portfolio icon",
          filename: "Vector 27-1.png",
          mimeType: "image/png",
          filesize: 35362,
          width: 207,
          height: 284,
          createdAt: "2024-07-08T13:38:06.765Z",
          updatedAt: "2024-07-08T13:38:06.765Z",
          url: "http://localhost:4000/media/Vector 27-1.png",
        },
        link: [
          {
            type: "custom",
            label: "INTERWOOD Case Study",
            url: "#",
            id: "668bebc17bc868663e2f6ec6",
          },
        ],
        id: "668bebb07bc868663e2f6ec5",
      },
      {
        title: "INTERWOOD Case Study",
        image: {
          id: "668bebdbbb6983e66a8692d9",
          alt: "portfolio icon",
          filename: "Vector 26-2.png",
          mimeType: "image/png",
          filesize: 26419,
          width: 207,
          height: 284,
          createdAt: "2024-07-08T13:38:35.006Z",
          updatedAt: "2024-07-08T13:38:35.006Z",
          url: "http://localhost:4000/media/Vector 26-2.png",
        },
        link: [
          {
            type: "custom",
            label: "INTERWOOD Case Study",
            url: "#",
            id: "668bebdd7bc868663e2f6ec8",
          },
        ],
        id: "668bebce7bc868663e2f6ec7",
      },
    ],
    id: "668be9117bc868663e2f6ebe",
    link: [
      {
        type: "custom",
        label: "View More",
        url: "#",
        id: "668bebdd7bc868663e2f6ew0",
      },
    ],
    blockName: "Our Work",
    blockType: "services",
  };
  return (
    <div className="container py-12 mx-auto">
      <div className="text-left mb-8 md:mb-12 flex flex-col gap-4  max-w-3xl">
        <h3 className="text-primary text-lg font-bold uppercase">
          {portfolioData.blockName}
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold">
          {portfolioData.title}
        </h1>
        <div className="flex">
          <DottedLine />
        </div>
        <p className="text-lg text-[#1F1F1F]">{portfolioData.description}</p>
      </div>
      <Link
        href={portfolioData.link?.[0]?.url || "#"}
        className="hover:underline block md:hidden mb-8"
      >
        <div className="flex items-center gap-1">
          <TriangleRightIcon className="w-6 h-6 text-primary" />
          <p className="text-lg font-semibold text-black">
            {portfolioData.link?.[0]?.label}
          </p>
        </div>
      </Link>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-8">
          {portfolioData.items.map((item, index) => (
            <div
              key={index}
              className="portfolio-item rounded-lg overflow-hidden"
            >
              <Link
                href={item.link?.[0]?.url || "#"}
                className="block hover:text-primary hover:underline"
              >
                <div>
                  <img
                    src={item?.image?.url}
                    alt={item?.image?.alt}
                    className="w-full h-auto mb-3 object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="text-md font-semibold">
                      {item.link?.[0]?.label}
                    </h4>
                    <ArrowRightIcon className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CarousalContainer
        carousalData={portfolioData?.items}
        renderCard={PortfolioCarousalCard}
      />
      <Link
        href={portfolioData.link?.[0]?.url || "#"}
        className="hover:underline hidden md:block"
      >
        <div className="flex items-center gap-1">
          <TriangleRightIcon className="w-6 h-6 text-primary" />
          <p className="text-lg font-semibold text-black">
            {portfolioData.link?.[0]?.label}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioSection;
