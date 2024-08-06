import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SubMenuType } from "@/src/types/headerTypes";

type ServicesSubMenuProps = {
  servicesSubMenu: SubMenuType[];
};

function ServicesSubMenu({ servicesSubMenu }: ServicesSubMenuProps) {
  return (
    <div className="flex justify-between gap-12">
      <div className="w-1/3 flex flex-col gap-4">
        <h2 className="text-primary w-11/12">{servicesSubMenu[0]?.heading}</h2>
        <Link href={servicesSubMenu[0]?.link[0]?.page?.slug || ""}>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-black">
              {servicesSubMenu[0]?.link[0]?.label}
            </p>
            <ArrowRightIcon className="text-secondary" />
          </div>
        </Link>
      </div>
      <div className="w-2/3 grid grid-cols-3 gap-4">
        {servicesSubMenu[0]?.subMenuItems?.map((item: any) => (
          <Link
            key={item.id}
            href={item?.page?.slug || ""}
            className="flex gap-4 items-start hover:rounded-lg hover:shadow-lg p-2"
          >
            <Image
              src={item?.icon?.url || `assets/icons/bulbIcon.svg`}
              alt={item?.icon?.alt || `subMenu Icon`}
              width={30}
              height={30}
              className="pt-1"
            />
            <div>
              <p className="font-semibold text-sm text-primary">{item.title}</p>
              <p className="text-gray text-xs">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesSubMenu;
