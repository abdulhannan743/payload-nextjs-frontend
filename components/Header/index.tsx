import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import header from "@/src/globalData/header.json";
import { Button } from "../ui/button";
import NavItem from "./NavItem";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import type { HeaderType, NavLinkType } from "@/src/types/headerTypes";

function transformData(data: HeaderType): { navLinks: NavLinkType[] } {
  return data.navLinks.reduce<{ navLinks: NavLinkType[] }>(
    (acc, item) => {
      const transformedItem = { ...item };

      if (item.parent) {
        const parentIndex = acc.navLinks.findIndex(
          (el) => el.link.id === item.parent?.id
        );

        if (parentIndex !== -1) {
          if (!acc.navLinks[parentIndex].childrens) {
            acc.navLinks[parentIndex].childrens = [];
          }
          acc?.navLinks[parentIndex]?.childrens?.push(transformedItem);
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
  const header: HeaderType = await fetchWrapper({
    url: "/api/globals/header",
    method: "GET",
  });

  const buttonLink = header.link?.[0];
  const buttonLabel = buttonLink?.label;
  const buttonUrl = buttonLink?.page?.slug;
  const newData = transformData(header);

  return (
    <div className="w-full md:container sticky top-0 z-50">
      <header className="bg-white my-14 shadow mx-auto  md:border-2 md:rounded-xl">
        <nav
          className="mx-auto flex items-center justify-between md:py-3 lg:px-2 lg:py-6 xl:px-6"
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
          <ul className="hidden lg:flex lg:gap-x-6	 text-black text-md">
            {newData.navLinks.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                fontWeight="font-semibold"
                closeSheet={undefined}
                showPlusIcon={undefined}
              />
            ))}
          </ul>
          <Link href={`/${buttonUrl}`}>
            <Button
              variant={"ghost"}
              className="hidden md:block border border-blue-700 text-blue-700 rounded-md items-center md:ml-0 lg:ml-10 w-28 h-9 font-bold text-sm font-roboto md:mr-12 lg:mr-0"
            >
              {buttonLabel}
            </Button>
          </Link>
        </nav>
      </header>
    </div>
  );
}
