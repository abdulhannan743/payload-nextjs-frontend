import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import header from "@/src/globalData/header.json";
import NavItem from "./NavItem";

function transformData(data) {
  return data.navLinks.reduce(
    (acc, item) => {
      const transformedItem = { ...item };

      if (item.parent) {
        const parentIndex = acc.navLinks.findIndex(
          (el) => el.link.id === item.parent.id
        );

        if (parentIndex !== -1) {
          if (!acc.navLinks[parentIndex].childrens) {
            acc.navLinks[parentIndex].childrens = [];
          }
          acc.navLinks[parentIndex].childrens.push(transformedItem);
        } else {
          acc.navLinks.push(transformedItem);
        }
      } else {
        acc.navLinks.push(transformedItem);
      }

      return acc;
    },
    { navLinks: [] }
  );
}

export default async function Header() {
  const header = await fetchWrapper({
    url: "/api/globals/header",
    method: "GET",
  });
  const buttonLink = header.link?.[0];
  const buttonLabel = buttonLink?.label;
  const buttonUrl = buttonLink?.page?.slug;
  const newData = transformData(header);

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
        <ul className="hidden lg:flex gap-12 lg:gap-8 text-black">
          {newData.navLinks.map((link) => (
            <NavItem key={link.label} link={link} fontWeight="font-semibold" />
          ))}
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
