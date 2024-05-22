import React from 'react'
import { useState } from 'react'
import header from '@/globalData/header.json'
import Image from 'next/image'
import Link from 'next/link'

function transformData(data) {
  const transformedData = { navLinks: [] };

  data.navLinks.forEach(item => {
      const transformedItem = { ...item };

      // Add children if the element has a parent
      if (item.parent) {
          const parentIndex = transformedData.navLinks.findIndex(el => el.link.id === item.parent.id);

          if (parentIndex !== -1) {
              // Parent exists, add to its children
              if (!transformedData.navLinks[parentIndex].childrens) {
                  transformedData.navLinks[parentIndex].childrens = [];
              }
              transformedData.navLinks[parentIndex].childrens.push(transformedItem);
          } else {
              // Parent not found yet, add it to the main array
              transformedData.navLinks.push(transformedItem);
          }
      } else {
          // No parent, add directly to the main array
          transformedData.navLinks.push(transformedItem);
      }
  });

  return transformedData;
}

const newData = transformData(header);

export default function Header() {
  return (
    <header className="bg-white py-14">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 mak_header_shadow rounded-xl" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <Image src={header.logo.url} className="h-10 w-auto" width={header.logo.width} height={header.logo.width} alt={header.logo.alt}/>
          </a>
        </div>
        <ul className="flex gap-10 p-6 absolute md:relative flex-col md:flex-row top-[-100%] md:top-[inherit]">
            {newData.navLinks.map((link) => {  
        if (link.childrens) {
            // Render submenu
            return (
                <li key={link.label} className="relative group">
                    <div className="cursor-pointer">{link.label}</div>
                    <ul className="absolute top-full left-0 bg-white shadow-md rounded-lg py-2 px-4 hidden group-hover:block z-10">
                        {link.childrens?.map(sublink => (
                                <li key={sublink.label}>
                                    <Link className='truncate' href={sublink.link.slug}>{sublink.label}</Link>
                                </li>
                                
                            ))}
                    </ul>
                </li>
            );
        } else {
            // Render main link
            return (
                <li>
                <Link key={link.label} href={(link.link?.slug)||'#'}>
                    {link.label}
                </Link>
                </li>
            );
        }
    })}
        </ul>
      </nav>
    </header>
  )
}
