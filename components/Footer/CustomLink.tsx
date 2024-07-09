import React from "react";
import Link from "next/link";
import { getHref } from "@/src/utils/getHref";

type CustomLinkProps = {
  slug: string;
  label: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ slug, label }) => {
  const href = getHref(slug);

  return (
    <Link href={href} passHref>
      <span className="hover:text-blue-500 hover:underline">{label}</span>
    </Link>
  );
};

export default CustomLink;
