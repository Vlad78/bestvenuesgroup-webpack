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

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "bg-black text-white px-8 py-[22px] flex flex-row gap-14 justify-between items-center h-[92px] w-full z-10",
        className
      )}
    >
      <div className="mr-auto">
        <Link href="#">
          <Logo alt="Logo" width={240} height={25.7} />
        </Link>
      </div>
      <NavigationMenu viewportClassName={"left-[-50px] top-[20px]"}>
        <NavigationMenuList className="hidden md:flex items-center gap-14 text-menu font-onest ">
          <NavigationMenuItem>
            <NavigationMenuTrigger>VENUE FINDING</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="bg-black w-[220px]">
                {venues.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
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
            <NavigationMenuTrigger>WHAT WE DO</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="bg-black w-[220px]">
                {whatWeDo.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">OUR EVENTS</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">ABOUT US</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="medium" icon="contact" title="Contact us" />

      {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button> */}
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
          "flex items-center justify-center select-none space-y-1 leading-none no-underline outline-none transition-colors hover:bg-gray-10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-menu font-onest py-[17px]">{title}</div>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
