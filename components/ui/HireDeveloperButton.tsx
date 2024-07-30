import React from "react";
import { Button, ButtonProps } from "../ui/button";

function withScrollToContactUs<
  P extends React.ButtonHTMLAttributes<HTMLButtonElement>
>(WrappedComponent: React.ComponentType<P>) {
  return React.forwardRef<HTMLButtonElement, P>((props, ref) => {
    const { onClick, ...rest } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const contactUsElement = document.getElementById("contact-us");
      if (contactUsElement) {
        contactUsElement.scrollIntoView({ behavior: "smooth" });
      }

      if (onClick) {
        onClick(event);
      }
    };

    return (
      <WrappedComponent ref={ref} onClick={handleClick} {...(rest as P)} />
    );
  });
}

const HireDeveloperButton = withScrollToContactUs<ButtonProps>(Button);

export default HireDeveloperButton;
