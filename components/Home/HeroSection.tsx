"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HeroSectionType = {
  heading: string;
  text: string;
  id: string;
  blockName: string;
  blockType: string;
  link: {
    type: string;
    label: string;
    page: {
      slug: string;
      [key: string]: any;
    };
    parent: {
      [key: string]: any;
    };
    id: string;
  }[];
  slides: {
    id: string;
    media: {
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
};
type HeroProps = {
  heroData: HeroSectionType[];
};

function HeroSection({ heroData }: HeroProps) {
  heroData = [
    {
      heading:
        "AllZone Technologies  has won the Best Software House Presidential Award 2023",
      text:
        "AllZone Technologies is a prestigious LCCI IT Presidential Award\n" +
        "2023-winning Company. It's been standing like a shining symbol of\n" +
        "excellence in software development and consultancy and\n" +
        "outsourcing dedicated teams of skilled developers.",
      link: [
        {
          type: "page",
          label: "Get In Touch",
          page: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",
            layout: [Array],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },
          parent: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",
            layout: [Array],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },
          id: "668bc2e874a4bf39006c23f9",
        },
      ],
      slides: [
        {
          media: {
            id: "6682ad8c102596380fca6ee4",
            alt: "trophy",
            width: 93,
            height: 242,
            url: "http://localhost:4000/media/5-1.png",
          },
          id: "668bc2f774a4bf39006c23fa",
        },
        {
          media: {
            id: "6682ad9e102596380fca6efc",
            alt: "group photo",
            width: 373,
            height: 243,
            url: "http://localhost:4000/media/azt-photo-1.svg",
          },
          id: "668bc30474a4bf39006c23fb",
        },
        {
          media: {
            id: "6682adb6102596380fca6f15",
            alt: "blue bg",
            width: 374,
            height: 129,
            url: "http://localhost:4000/media/Blue-bg.svg",
          },
          id: "668bc30e74a4bf39006c23fc",
        },
        {
          media: {
            id: "6682ad66102596380fca6ecd",
            alt: "dev",
            width: 93,
            height: 128,
            url: "http://localhost:4000/media/onbench.svg",
          },
          id: "668bc31974a4bf39006c23fd",
        },
      ],

      id: "668bc2ac74a4bf39006c23f8",
      blockName: "Hero Section",
      blockType: "home",
    },
    {
      heading:
        "Software Development Consultancy for Startups, Enterprises & Businesses",
      text: "AllZone Technologies is one of the top software development companies offering consultancy to startups, businesses, and enterprises. We outsource dedicated developers to scale your engineering needs with suitable time zones following your work model.",

      link: [
        {
          type: "page",
          label: "Get In Touch",

          page: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",

            layout: [
              {
                heading: "Contact Us Page dummy",
                text: "hello from Contact us",

                link: [],
                id: "663a0a15d76a8e31b0e1d3b0",
                blockType: "hero",
              },
            ],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },

          parent: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",

            layout: [
              {
                heading: "Contact Us Page dummy",
                text: "hello from Contact us",

                link: [],
                id: "663a0a15d76a8e31b0e1d3b0",
                blockType: "hero",
              },
            ],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },
          id: "668bc2e874a4bf39006c23f9",
        },
      ],

      slides: [
        {
          media: {
            id: "668be3e90c20fdd3e8269983",
            alt: "1",

            width: 394,
            height: 242,

            url: "http://localhost:4000/media/5 (1).png",
          },
          id: "668bc2f774a4bf39006c23fa",
        },

        {
          media: {
            id: "668be4070c20fdd3e82699a1",
            alt: "2",

            width: 73,
            height: 243,

            url: "http://localhost:4000/media/8.png",
          },
          id: "668bc30474a4bf39006c23fb",
        },

        {
          media: {
            id: "668be41c0c20fdd3e82699be",
            alt: "3",

            width: 113,
            height: 129,

            url: "http://localhost:4000/media/3.png",
          },
          id: "668bc30e74a4bf39006c23fc",
        },

        {
          media: {
            id: "668be4300c20fdd3e82699dc",
            alt: "4",

            width: 353,
            height: 128,

            url: "http://localhost:4000/media/4.png",
          },
          id: "668bc31974a4bf39006c23fd",
        },
      ],
      id: "668be32bac5a1e16c2782942",
      blockName: "Hero Section2",
      blockType: "home",
    },
    {
      heading:
        "Your Digital Transformation Partner using cutting Edge Technologies",
      text: "You are on the brink of the digital transformation of your business. Our cutting-edge technologies help you to get your projects and products off the ground. Our team will guide you through the transformative process and craft solutions that align with your challenges.",

      link: [
        {
          type: "page",
          label: "Get In Touch",

          page: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",

            layout: [
              {
                heading: "Contact Us Page dummy",
                text: "hello from Contact us",

                link: [],
                id: "663a0a15d76a8e31b0e1d3b0",
                blockType: "hero",
              },
            ],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },

          parent: {
            id: "663a0a15af4dedb881ed76a5",
            name: "Contact Us",
            slug: "contact-us",

            layout: [
              {
                heading: "Contact Us Page dummy",
                text: "hello from Contact us",

                link: [],
                id: "663a0a15d76a8e31b0e1d3b0",
                blockType: "hero",
              },
            ],
            createdAt: "2024-05-07T11:01:41.337Z",
            updatedAt: "2024-07-01T14:15:21.745Z",
          },
          id: "668bc2e874a4bf39006c23f9",
        },
      ],

      slides: [
        {
          media: {
            id: "668be47d0c20fdd3e82699fa",
            alt: "1",
            width: 93,
            height: 129,
            url: "http://localhost:4000/media/6.png",
          },
          id: "668bc2f774a4bf39006c23fa",
        },

        {
          media: {
            id: "668be48c0c20fdd3e8269a18",
            alt: "2",
            width: 373,
            height: 129,
            url: "http://localhost:4000/media/7.png",
          },
          id: "668bc30474a4bf39006c23fb",
        },

        {
          media: {
            id: "668be49e0c20fdd3e8269a31",
            alt: "3",
            width: 374,
            height: 242,
            url: "http://localhost:4000/media/3 (1).png",
          },
          id: "668bc30e74a4bf39006c23fc",
        },

        {
          media: {
            id: "668be4ab0c20fdd3e8269a4f",
            alt: "4",
            width: 93,
            height: 242,
            url: "http://localhost:4000/media/4 (1).png",
          },
          id: "668bc31974a4bf39006c23fd",
        },
      ],
      id: "668be32fac5a1e16c2782944",
      blockName: "Hero Section3",
      blockType: "home",
    },
  ];
  const [currentDataIndex, setCurrentDataIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDataIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [heroData]);

  const currentData = heroData[currentDataIndex];

  return (
    <div className="flex bg-white justify-between items-center pl-64 pr-64 mb-24">
      <div className="w-1/2 pl-24 pr-48 mb-4">
        <h2 className="font-bold text-3xl mb-4 text-blue-500">
          {currentData.heading}
        </h2>
        <p className="text-lg text-black mb-4">{currentData.text}</p>
        {currentData.link[0] && (
          <Link href={currentData.link[0]?.page.slug}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {currentData.link[0]?.label}
            </button>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex flex-wrap justify-center items-center pr-24">
        {currentData.slides.map((slide: any) => (
          <div
            key={slide.id}
            className="relative transform transition-transform hover:scale-105 hover:shadow-lg m-2 "
            style={{
              width: `${slide.media.width}px`,
              height: `${slide.media.height}px`,
              margin: "10px",
            }}
          >
            <Image
              src={slide.media.url}
              alt={slide.media.alt}
              width={slide.media.width}
              height={slide.media.height}
              layout="fixed"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
