"use client";

import Logo from "@/shared/assets/Logo.svg";
import Link from "next/link";
import { Button } from "@/shared/components/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/NavigationMenu";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { motion, MotionProps } from "framer-motion";

const venues: { title: string; href: string }[] = [
  {
    title: "NEW YORK",
    href: "#",
  },
  {
    title: "LONDON",
    href: "#",
  },
  {
    title: "CORPORATE RETREATS",
    href: "#",
  },
];

const whatWeDo: { title: string; href: string }[] = [
  {
    title: "VENUE SOURCING",
    href: "#",
  },
  {
    title: "ACCOMMODATION",
    href: "#",
  },
  {
    title: "CORPORATE EVENTS",
    href: "#",
  },
  {
    title: "PARTIES",
    href: "#",
  },
  {
    title: "CHARITY GALAS",
    href: "#",
  },
  {
    title: "BOARD MEETINGS",
    href: "#",
  },
];

const animationPopUp = (customValue: number): MotionProps => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: customValue * 0.08, duration: 0.2 },
  viewport: { once: true },
});

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "bg-black text-white px-8 py-[22px] flex flex-row justify-center items-center h-[92px] w-full z-10",
        className
      )}
    >
      <div className="max-w-[1312px] flex-1 flex flex-row gap-14 justify-between items-center">
        <div className="mr-auto">
          <Link href="#">
            <Logo alt="Logo" width={240} height={25.7} />
          </Link>
        </div>

        <NavigationMenu viewportClassName={"left-[-50px] top-[20px]"}>
          <NavigationMenuList className=" hidden md:flex items-center gap-14 text-menu font-onest ">
            <NavigationMenuItem>
              <NavigationMenuTrigger motionProps={animationPopUp(0)}>
                VENUE FINDING
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-black w-[220px]">
                  {venues.map((component, i) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className={cn("hover:text-primary-tan-0", {
                        "border-t border-transparentWhite-30": i !== 0,
                      })}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu viewportClassName={"left-[-55px] top-[20px]"}>
          <NavigationMenuList className="hidden md:flex items-center gap-14 text-menu font-onest ">
            <NavigationMenuItem>
              <NavigationMenuTrigger motionProps={animationPopUp(1)}>
                WHAT WE DO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-black w-[220px]">
                  {whatWeDo.map((component, i) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className={cn("hover:text-primary-tan-0", {
                        "border-t border-transparentWhite-30": i !== 0,
                      })}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:text-primary-tan-0">
                <motion.span {...animationPopUp(2)}>OUR EVENTS</motion.span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:text-primary-tan-0">
                <motion.span {...animationPopUp(3)}>ABOUT US </motion.span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div className="hidden md:flex" {...animationPopUp(4)}>
          <Button variant="medium" icon="contact" title="Contact us" />
        </motion.div>
        {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button> */}
      </div>
    </header>
  );
}

const ListItem: React.FC<{
  title: string;
  className?: string;
  href: string;
}> = ({ className, title, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        className={cn(
          "flex items-center justify-center select-none space-y-1 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",

          className
        )}
        {...props}
      >
        <motion.div
          className="text-menu font-onest py-[17px]"
          {...{
            initial: { opacity: 0, y: -5 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
          }}
        >
          {title}
        </motion.div>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
