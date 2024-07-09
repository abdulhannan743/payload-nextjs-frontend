import React from "react";

function DottedLine() {
  return (
    <div className="flex justify-center align-center gap-1">
      <hr className="bg-secondary border-none h-[2px] w-[10px]" />
      <hr className="bg-secondary border-none h-[2px] w-[50px]" />
    </div>
  );
}

export default DottedLine;
