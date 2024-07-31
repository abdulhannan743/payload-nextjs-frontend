import React from "react";

type RenderDescriptionProps = {
  description: string;
  backgroundDark?: boolean;
  isBulletSecondaryOnDarkBackground?: boolean;
};

function RenderDescription({
  description,
  backgroundDark = false,
  isBulletSecondaryOnDarkBackground = true,
}: RenderDescriptionProps) {
  const [mainParagraph, ...features] = description.split("\n");

  const isSteps = features.some((feature) => feature.startsWith("Step"));

  return (
    <div
      className={`text-md max-w-4xl text-lg ${
        backgroundDark ? "text-white" : "text-gray"
      }`}
    >
      <p>{mainParagraph}</p>

      <ul className={`ml-5 mt-4 relative ${isSteps ? "" : "list-disc"}`}>
        {features.map((feature, index) => (
          <li
            key={index}
            className={`py-2 marker:text-2xl ${
              isBulletSecondaryOnDarkBackground
                ? "marker:text-secondary"
                : backgroundDark
                ? "marker:text-secondary"
                : "marker:text-primary"
            }`}
          >
            {isSteps ? (
              <p>
                <span className="text-base font-bold text-primary">
                  Step {index + 1}:
                </span>
                {feature.split("Step")}
              </p>
            ) : (
              <p>{feature}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderDescription;
