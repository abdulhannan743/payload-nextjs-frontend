"use client";
import React from "react";
import clsx from "clsx";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

type ClientsSectionProps = {
  clientsData: ServiceBlockType;
};

function ClientsSection({ clientsData }: ClientsSectionProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clientsData.items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clientsData.items.length - 1 ? 0 : prevIndex + 1
    );
  };
  clientsData = {
    title: "Why Our Clients Can’t Stop Talking About Us?",
    description:
      "We have 100% satisfied clients. Allzone Technologies software developers, product managers, and UX designers will serve you unless you are happy.",
    items: [
      {
        title: "Tracy Hurley",
        description:
          "The team at AllZone technologies did an excellent job -- they did everything I asked them to do and more. They were the best tech provider I have ever outsourced. I highly recommend them for your next project. Pricing was more than fair.",
        iconName: "CEO",
        image: {
          id: "66868d3d5c8fcee83a3a406d",
          alt: "client image",
          filename: "client3.png",
          mimeType: "image/png",
          filesize: 25640,
          width: 134,
          height: 134,
          createdAt: "2024-07-04T11:53:33.644Z",
          updatedAt: "2024-07-04T11:53:33.644Z",
          url: "http://localhost:4000/media/client3.png",
        },
        id: "66868b3977a98f84b9aab60e",
      },
      {
        title: "John Doe",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        iconName: "CEO",
        image: {
          id: "66868d955c8fcee83a3a4075",
          alt: "client image",
          filename: "client2.jpg",
          mimeType: "image/jpeg",
          filesize: 42799,
          width: 540,
          height: 360,
          createdAt: "2024-07-04T11:55:01.282Z",
          updatedAt: "2024-07-04T11:55:01.282Z",
          url: "http://localhost:4000/media/client2.jpg",
        },
        id: "66868d6977a98f84b9aab60f",
      },
      {
        title: "Heisenberg",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        iconName: "CEO",
        image: {
          id: "66868dcd5c8fcee83a3a407d",
          alt: "client image",
          filename: "client1.jpg",
          mimeType: "image/jpeg",
          filesize: 1084715,
          width: 1987,
          height: 3000,
          createdAt: "2024-07-04T11:55:57.660Z",
          updatedAt: "2024-07-04T11:55:57.660Z",
          url: "http://localhost:4000/media/client1.jpg",
        },
        id: "66868d9777a98f84b9aab610",
      },
    ],
    id: "66868b3677a98f84b9aab60d",
    blockName: "Our Clients",
    blockType: "services",
  };
  return (
    <div className="bg-[#0D2234] py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            {clientsData?.title}
          </h1>
          <p className="text-sm text-center text-white mx-auto max-w-2xl">
            {clientsData?.description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="text-white hidden md:block"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            {clientsData.items.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "rounded-full overflow-hidden h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 transition-transform duration-500",
                  {
                    "transform scale-100": index === activeIndex,
                    "transform scale-75 opacity-50":
                      index !== activeIndex && activeIndex !== null,
                  }
                )}
              >
                <img
                  src={item?.image?.url}
                  alt={item?.image?.alt}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
            <button
              onClick={handleNext}
              disabled={activeIndex === clientsData.items.length - 1}
              className="text-white hidden md:block"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center text-white flex flex-col items-center">
            <p className="text-sm max-w-2xl mx-auto mb-3">
              {clientsData.items[activeIndex].description}
            </p>
            <div className="flex justify-between align-center w-full md:w-auto">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="text-white md:hidden"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  {clientsData.items[activeIndex].title}
                </h3>
                <p className="text-sm text-[#1273EB] font-bold">
                  {clientsData.items[activeIndex].iconName}
                </p>
              </div>
              <button
                onClick={handleNext}
                disabled={activeIndex === clientsData.items.length - 1}
                className="text-white md:hidden"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;
