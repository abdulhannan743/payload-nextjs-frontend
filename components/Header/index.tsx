"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import ServicesSubMenu from "./ServicesSubMenu";
import { Button } from "../ui/button";
import NavItem from "./NavItem";
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

export default function Header({ header }: { header: HeaderType }) {
  const pathname = usePathname();

  const buttonLink = header.link?.[0];
  const buttonLabel = buttonLink?.label;
  const buttonUrl = buttonLink?.page?.slug;
  const newData = transformData(header);
  const servicesSubMenu = newData.navLinks.find(
    (item) => item.label === "Services"
  )?.subMenu;
  // const IndustriesSubMenu = newData.navLinks.find(
  //   (item) => item.label === "Industries"
  // )?.subMenu;

  return (
    <header className="bg-white py-14">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 lg:rounded-xl lg:shadow-header-shadow lg:p-3 lg:py-6 relative"
        aria-label="Global"
      >
        <div className="text-black ml-8 sm:ml-12 md:ml-16 lg:hidden">
          <NavMenu logo={header?.logo} newData={newData} />
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
        <ul className="hidden lg:flex lg:gap-x-6 text-navbar-black text-sm">
          {newData.navLinks.map((link) => (
            <div
              className={`nav-item border-b-2 hover:text-primary hover:border-primary ${
                pathname === `/${link.link.slug}` ||
                (link.link.slug === "home" && pathname === "/")
                  ? "text-primary border-primary"
                  : "border-transparent"
              }`}
              key={link.label}
            >
              <NavItem
                link={link}
                fontWeight="font-semibold"
                closeSheet={undefined}
                showPlusIcon={undefined}
              />
              <div className="dropdown-content">
                {(link.label === "Services" || link.label === "Industries") && (
                  <div className="mx-auto max-w-7xl px-16 lg:rounded-xl py-6 bg-white lg:shadow-header-shadow">
                    {(link.label === "Services" ||
                      link.label === "Industries") &&
                      servicesSubMenu && (
                        <ServicesSubMenu servicesSubMenu={servicesSubMenu} />
                      )}
                    {/* just for the future reference
                  {link.label === "Industries" && (
                    <TechnologiesSubMenu />
                  )} */}
                  </div>
                )}
              </div>
            </div>
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
  );
}
