import React from "react";
import { classNames } from "@/src/utils/classNames";

type FlexChildProps = {
  children: React.ReactNode;
  className?: string;
};

const FlexChild: React.FC<FlexChildProps> = ({ children, className = "" }) => {
  return <div className={classNames("flex-child", className)}>{children}</div>;
};

export default FlexChild;
