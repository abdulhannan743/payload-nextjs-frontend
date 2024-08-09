import React from "react";
import Image from "next/image";

interface Icon {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
}

interface SubItem {
  icon: Icon;
  iconHeading: string;
  id: string;
}

interface Slide {
  image: Icon;
  id: string;
}

interface CareersOffersProps {
  heading: string;
  subItem: SubItem[];
  slides: Slide[];
}

const CareerOffers: React.FC<{ careersOffers: CareersOffersProps }> = ({
  careersOffers,
}) => {
  const { heading, subItem, slides } = careersOffers;

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:max-w-2xl lg:ml-72 pb-10">
          {heading}
        </h2>
        <div className="lg:flex gap-4">
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-10">
            {subItem.map((item) => (
              <div
                key={item.id}
                className="bg-secondary rounded-lg flex flex-row items-center p-2"
              >
                <Image
                  src={item.icon.url}
                  alt={item.icon.alt}
                  width={item.icon.width}
                  height={item.icon.height}
                />
                <p className="font-bold text-white mt-2 text-center">
                  {item.iconHeading}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2 md:w-full flex flex-col gap-4 hidden lg:block md:block">
            <div className="flex gap-4">
              {slides.slice(0, 2).map((slide) => (
                <div key={slide.id} className="w-1/2">
                  <Image
                    src={slide.image.url}
                    alt={slide.image.alt}
                    layout="responsive"
                    width={slide.image.width}
                    height={slide.image.height}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            {slides.length > 2 && (
              <div className="mt-4">
                <Image
                  src={slides[2].image.url}
                  alt={slides[2].image.alt}
                  layout="responsive"
                  width={slides[2].image.width}
                  height={slides[2].image.height}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOffers;
