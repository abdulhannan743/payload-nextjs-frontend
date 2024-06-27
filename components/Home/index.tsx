import React from "react";

type HomeProps = {
  heading: string;
  text: string;
};

export default function Home({ heading, text }: HomeProps) {
  return (
    <div className="flex bg-white">
      <div className="relative overflow-hidden max-w-xl pl-20 pr-20 pb-10">
        <h2 className="font-bold text-3xl mb-4 text-blue-500">{heading}</h2>
        <p className="text-lg text-black">{text}</p>
      </div>
    </div>
  );
}
