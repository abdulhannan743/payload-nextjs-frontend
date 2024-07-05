import React from "react";
import IndustriesCard from "./IndustriesCard";
import { HomeProps } from "@/src/types/HomeTypes";

export default function Home({ heading, text, matadata }: HomeProps) {
  return (
    <div className="flex bg-white flex-col px-64">
      <div className="relative overflow-hidden max-w-xl">
        <h2 className="font-bold text-3xl mb-4 text-blue-500">{heading}</h2>
        <p className="text-lg text-black">{text}</p>
      </div>
      <IndustriesCard heading={matadata.heading} matadata={matadata} />
    </div>
  );
}
