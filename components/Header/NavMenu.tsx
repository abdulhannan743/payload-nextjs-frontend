"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";
import header from "@/src/globalData/header.json";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import type { HeaderType, NavLinkType } from "@/src/types/headerTypes";

function transformData(data: HeaderType) {
  return data.navLinks.reduce<{ navLinks: NavLinkType[] }>(
    (acc, item) => {
      const transformedItem = { ...item };

      if (item.parent) {
        const parentIndex = acc.navLinks.findIndex(
          (el) => el.link.id === item.parent!.id
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

const newData = transformData(header);

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button onClick={() => setIsOpen(true)}>
            <FiAlignJustify size={40} />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
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
            </SheetTitle>
            <SheetDescription>
              <div>
                <ul className="text-black">
                  {newData.navLinks.map((link) => (
                    <NavItem
                      key={link.label}
                      link={link}
                      closeSheet={closeSheet}
                      showPlusIcon={true}
                    />
                  ))}
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMenu;
