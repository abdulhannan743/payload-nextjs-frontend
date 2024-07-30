import React from "react";

type ArrowRightIconProps = {
  width?: string;
  height?: string;
  color?: string;
};

function ArrowRightIcon({
  width = "189",
  height = "30",
  color = "#00000033",
}: ArrowRightIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 189 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M188.414 16.4142C189.195 15.6332 189.195 14.3668 188.414 13.5858L175.686 0.857864C174.905 0.0768156 173.639 0.0768156 172.858 0.857864C172.077 1.63891 172.077 2.90524 172.858 3.68629L184.172 15L172.858 26.3137C172.077 27.0948 172.077 28.3611 172.858 29.1421C173.639 29.9232 174.905 29.9232 175.686 29.1421L188.414 16.4142ZM0 17H187V13H0V17Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowRightIcon;
