import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import ContactSVG from "@/shared/assets/icons/Contact";
import ArrowRightSVG from "@/shared/assets/icons/Type=Arrow right.svg";

import { cn } from "@/shared/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  asChild?: boolean;
  icon?: "contact" | "arrow-right";
  title?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "",
      asChild = false,
      children,
      icon,
      title,
      ...props
    },
    ref
  ) => {
    const variants = variant.split("-");
    const IconSvg = getIcon(icon);

    let s =
      "group font-onest flex items-center bg-white text-black uppercase hover:bg-primary-tan-0 hover:text-white";
    const iconSize = "w-6 h-6";

    if (variants.includes("medium")) {
      s += " py-3 text-buttonMd px-8";
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(s, className)} ref={ref} {...props}>
        {icon && (
          <IconSvg
            className={cn(" mr-2 ml-[-8px]", iconSize)}
            alt="Contact us"
          />
        )}
        {title ? title : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };

const getIcon = (icon?: string) => {
  switch (icon) {
    case "contact":
      return ContactSVG;
    case "arrow-right":
      return ArrowRightSVG;
    default:
      return null;
  }
};
