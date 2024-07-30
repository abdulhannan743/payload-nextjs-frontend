import Link from "next/link";
import React from "react";

const AwardWinningSection = () => {
  return (
    <div className="w-full mt-16 hidden md:block">
      <div className="relative flex overflow-hidden items-center">
        <div className="flex flex-col animate-marquee whitespace-nowrap">
          <span className="text-6xl mx-10 font-semibold tracking-[16px]">
            Presidential Award Winning Company
          </span>
        </div>
        <div className="flex flex-col absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="text-6xl mx-10 font-semibold tracking-[16px]">
            Presidential Award Winning Company
          </span>
        </div>
      </div>
      <div className="relative flex my-5 overflow-hidden items-center">
        <div className="flex flex-col  animate-marquee whitespace-nowrap">
          <span className="text-6xl mx-6 font-light tracking-[16px]">
            2023 BEST software House
          </span>
        </div>
        <div className="flex flex-col absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="text-6xl mx-6 font-light tracking-[16px]">
            2023 BEST software House
          </span>
        </div>
      </div>
      <div className="container relative flex justify-center mt-12 items-center">
        <div className="absolute left-[49.5%] top-[47%] w-32 h-32 -translate-x-1/2 -translate-y-1/2 transform z-10">
          <Link
            href="/contact-us"
            className="w-36 h-36 flex items-center justify-center rounded-full bg-primary cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white w-20 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
        <img
          src="assets/images/curvedText.png"
          alt="rotating text"
          width={250}
          height={250}
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default AwardWinningSection;
