import React from "react";

type ScrollableContainerProps = {
  children: React.ReactNode;
  scrollAxis?: "x" | "y";
  shouldScrollEnable?: boolean;
};

function ScrollableContainer({
  children,
  scrollAxis,
  shouldScrollEnable = true,
}: ScrollableContainerProps) {
  return (
    <div
      className={`overflow-x-scroll scrollbar-custom ${
        !shouldScrollEnable && "hide_scrollbar"
      }`}
    >
      <style>
        {`
              .scrollbar-custom {
                scrollbar-width: inherit;
              }
              .scrollbar-custom::-webkit-scrollbar {
                height: 8px;
                width: 8px;
                }
                .scrollbar-custom::-webkit-scrollbar-track {
                background: #D9D9D9;
                margin-left: 30%;
                margin-right: 30%;
                border-radius: 10px;
                }
                .scrollbar-custom::-webkit-scrollbar-thumb {
                background: #0D4C8F;
                border-radius: 10px;
                }
            `}
      </style>
      {children}
    </div>
  );
}

export default ScrollableContainer;
