import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiAlignJustify, FiPlus } from "react-icons/fi";
import header from "@/globalData/header.json";
import Link from "next/link";
import Image from "next/image";

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

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                  {newData.navLinks.map((link) => {
                    const href =
                      link.link.slug === "home" ? "/" : `/${link.link.slug}`;
                    return (
                      <li key={link.label} className="relative group pt-2">
                        <div className="flex items-center justify-between cursor-pointer space-x-2 font-bold">
                          <Link href={href} onClick={closeSheet}>
                            <span>{link.label}</span>
                          </Link>
                          <FiPlus />
                        </div>
                        {link.childrens && (
                          <ul className="absolute top-full left-0 bg-white shadow-md rounded-lg py-2 px-4 hidden group-hover:block z-10">
                            {link.childrens.map((sublink) => (
                              <li key={sublink.label} className="pt-2">
                                <Link
                                  href={`/${sublink.link.slug}`}
                                  onClick={closeSheet}
                                >
                                  {sublink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
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
