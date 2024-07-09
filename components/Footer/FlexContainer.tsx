import React from "react";
import { classNames } from "@/src/utils/classNames";

type FlexContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  className = "",
}) => {
  return <div className={classNames("flex", className)}>{children}</div>;
};

export default FlexContainer;
