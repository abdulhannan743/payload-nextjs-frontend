import React from "react";
import header from "@/globalData/header.json";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import NavMenu from "./NavMenu";

// Transform data function to process the header JSON data
function transformData(data) {
  const transformedData = { navLinks: [] };

  data.navLinks.forEach((item) => {
    const transformedItem = { ...item };

    if (item.parent) {
      const parentIndex = transformedData.navLinks.findIndex(
        (el) => el.link.id === item.parent.id
      );

      if (parentIndex !== -1) {
        if (!transformedData.navLinks[parentIndex].childrens) {
          transformedData.navLinks[parentIndex].childrens = [];
        }
        transformedData.navLinks[parentIndex].childrens.push(transformedItem);
      } else {
        transformedData.navLinks.push(transformedItem);
      }
    } else {
      transformedData.navLinks.push(transformedItem);
    }
  });

  return transformedData;
}

const newData = transformData(header);

export default function Header() {
  const buttonLink = header.link?.[0];
  const buttonLabel = buttonLink?.label;
  const buttonUrl = buttonLink?.page?.slug;

  return (
    <header className="bg-white py-14">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 lg:shadow lg:rounded-xl lg:p-3 lg:border-2 lg:py-6"
        aria-label="Global"
      >
        <div className="text-black ml-8 sm:ml-12 md:ml-16 lg:hidden">
          <NavMenu />
        </div>
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src={header.logo.url}
              className="h-10 w-auto"
              width={header.logo.width}
              height={header.logo.height}
              alt={header.logo.alt}
            />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-12 text-black">
          {newData.navLinks.map((link) => {
            const href = link.link.slug === "home" ? "/" : `/${link.link.slug}`;
            if (link.childrens) {
              return (
                <li key={link.label} className="relative group">
                  <div className="cursor-pointer">{link.label}</div>
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-lg py-2 px-4 hidden group-hover:block z-10">
                    {link.childrens.map((sublink) => (
                      <li key={sublink.label}>
                        <Link href={`/${sublink.link.slug}`}>
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={link.label}>
                  <Link href={href} className="uppercase text-sm font-semibold">
                    {link.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <Link href={`/${buttonUrl}`}>
          <button className="hidden md:block border border-blue-500 text-blue-500 rounded-md items-center md:ml-0 lg:ml-10 w-28 h-9 font-bold text-sm font-roboto mr-4 lg:mr-0">
            {buttonLabel}
          </button>
        </Link>
      </nav>
    </header>
  );
}
