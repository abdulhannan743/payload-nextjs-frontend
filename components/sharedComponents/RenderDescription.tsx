import React from "react";

type RenderDescriptionProps = {
  description: string;
};
function RenderDescription({ description }: RenderDescriptionProps) {
  const [mainParagraph, ...features] = description.split("\n");
  return (
    <div className={`text-md max-w-4xl text-lg text-gray`}>
      <p>{mainParagraph}</p>
      <ul className="list-disc ml-5 mt-4 ">
        <style>{`
        .custom-list::marker {
          color: #20C897;
          font-size: 1.5rem;
        }
        `}</style>
        {features.map((feature, index) => (
          <li key={index} className="py-2 custom-list">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderDescription;
