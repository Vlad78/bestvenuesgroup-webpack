"use client";

import accomodation from "../shared/assets/pictures/whatWeDo/Accommodation.jpg";
import board from "../shared/assets/pictures/whatWeDo/Board meetings.jpg";
import charity from "../shared/assets/pictures/whatWeDo/Charity galas.jpg";
import corporate from "../shared/assets/pictures/whatWeDo/Corporate events.jpg";
import parties from "../shared/assets/pictures/whatWeDo/Parties.jpg";
import venue from "../shared/assets/pictures/whatWeDo/Venue Sourcing.jpg";

import Image from "next/image";

import { ScrollBar } from "../shared/components/ScrollArea";
import { Button } from "../shared/components/Button";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const sections = [
  { title: "VENUE SOURCING", image: venue },
  { title: "ACCOMMODATION", image: accomodation },
  { title: "CORPORATE EVENTS", image: corporate },
  { title: "PARTIES", image: parties },
  { title: "CHARITY", image: charity },
  { title: "BOARD MEETINGS", image: board },
];

export const WhatWeDo = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isHovered && scrollAreaRef.current) {
        event.preventDefault();
        scrollAreaRef.current.scrollBy({
          left: event.deltaY * 4,
          behavior: "smooth",
        });
      }
    },
    [isHovered]
  );

  useLayoutEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      scrollArea.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isHovered, handleWheel]);

  return (
    <>
      <div className="flex flex-col gap-6 max-w-[50%] my-16">
        <h1 className="text-h1 uppercase">
          Every successful event starts with the perfect venue
        </h1>
        <p className="text-subheading1 font-onest">
          At Best Venues Group, we focus on delivering personalized venue
          solutions and full- service event management designed to meet your
          specific objectives
        </p>
      </div>
      <ScrollArea
        className="overflow-hidden"
        ref={scrollAreaRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex w-max space-x-4 ">
          {sections.map((section) => (
            <figure
              key={section.title}
              className="group relative flex flex-col justify-end w-[528px] h-[528px] overflow-hidden"
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 528px, (max-width: 1200px) 528px, 528px"
                className="object-cover z-[-1] transition-transform duration-300 ease-in-out group-hover:scale-[1.1]"
              />

              <div className="flex flex-col items-start gap-6 mb-16 mx-12">
                <h2 className="text-h3 text-white cursor-default">
                  {section.title}
                </h2>
                <Button title="LEARN MORE" variant="small" icon="arrow-right" />
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </>
  );
};
