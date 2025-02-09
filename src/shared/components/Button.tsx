import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import ContactSVG from "@/shared/assets/icons/Contact";
import ArrowRightSVG from "@/shared/assets/icons/Type=Arrow right.svg";
import BellSVG from "@/shared/assets/icons/Type=Subscribe.svg";

import { cn } from "@/shared/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  asChild?: boolean;
  icon?: "contact" | "arrow-right" | "bell";
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

    let buttonStyle =
      "group font-onest flex items-center bg-white text-black uppercase hover:bg-primary-tan-0 hover:text-white";
    let iconStyle = "";

    if (variants.includes("large")) {
      buttonStyle += " py-[13px] text-buttonLg px-[45px]";
      iconStyle += " w-9 h-9 mr-2 ml-[-8px]";
    }

    if (variants.includes("medium")) {
      buttonStyle += " py-3 text-buttonMd px-8";
      iconStyle += " w-6 h-6 mr-2 ml-[-8px]";
    }

    if (variants.includes("small")) {
      buttonStyle += " py-2 text-buttonSm px-4";
      iconStyle += " w-5 h-5 mr-1 ml-[-2px]";
    }

    if (variants.includes("outlined") && variants.includes("medium")) {
      buttonStyle +=
        " bg-transparent border-solid border-white border-[3px] py-[9px] px-[29px] text-white hover:bg-white hover:text-black";
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonStyle, className)} ref={ref} {...props}>
        {icon && <IconSvg className={cn("", iconStyle)} alt="Contact us" />}
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
    case "bell":
      return BellSVG;
    default:
      return null;
  }
};
