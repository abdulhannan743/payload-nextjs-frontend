import React from "react";
import Image from "next/image";
import TwoColumn from "./TwoColumn";

export default function Home({ heading, text, backgroundImage }) {
  return (
    <div>
      <div className="flex bg-white">
        <div className="relative overflow-hidden max-w-xl pl-20 pr-20 pb-10">
          <div>
            <h2 className="font-bold text-3xl mb-4 text-blue-500">{heading}</h2>
            <p className="text-lg text-black">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}