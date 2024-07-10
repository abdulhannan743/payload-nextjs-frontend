import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`bg-stone-200 p-4 md:p-6 space-y-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
