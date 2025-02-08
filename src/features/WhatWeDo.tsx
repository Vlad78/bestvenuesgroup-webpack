"use client";

import {
  motion,
  useTransform,
  useScroll as useScrollMotion,
} from "framer-motion";

import accomodation from "../shared/assets/pictures/whatWeDo/Accommodation.jpg";
import board from "../shared/assets/pictures/whatWeDo/Board meetings.jpg";
import charity from "../shared/assets/pictures/whatWeDo/Charity galas.jpg";
import corporate from "../shared/assets/pictures/whatWeDo/Corporate events.jpg";
import parties from "../shared/assets/pictures/whatWeDo/Parties.jpg";
import venue from "../shared/assets/pictures/whatWeDo/Venue Sourcing.jpg";
import retreatsVilaVitaparc from "@/shared/assets/pictures/RetreatsVilaVitaparc.png";
import Image from "next/image";
import { Button } from "../shared/components/Button";
import { useRef } from "react";

const sections = [
  { title: "VENUE SOURCING", image: venue },
  { title: "ACCOMMODATION", image: accomodation },
  { title: "CORPORATE EVENTS", image: corporate },
  { title: "PARTIES", image: parties },
  { title: "CHARITY", image: charity },
  { title: "BOARD MEETINGS", image: board },
];

export const WhatWeDo = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScrollMotion({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60.6%"]);

  console.log(x);

  return (
    <>
      <div ref={targetRef} className="relative  w-full">
        <div className="sticky top-[140px] flex flex-col gap-6 pl-12 max-w-[55%] mb-16">
          <h1 className="text-h1 uppercase">
            Every successful event starts with the perfect venue
          </h1>
          <p className="text-subheading1 font-onest">
            At Best Venues Group, we focus on delivering personalized venue
            solutions and full- service event management designed to meet your
            specific objectives
          </p>
        </div>
        <div className="h-[300vh]">
          <div className="sticky top-[528px] flex h-[0vh]">
            <motion.div className="flex gap-8" style={{ x }}>
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="group relative flex flex-col justify-end w-[528px] h-[528px]"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    quality={100}
                    placeholder="blur"
                    sizes="(max-width: 768px) 528px, (max-width: 1200px) 528px, 528px"
                    className="object-cover z-[-1] transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
                  />
                  <div className="flex flex-col items-start gap-6 mb-16 mx-12">
                    <h2 className="text-h3 text-white cursor-default">
                      {section.title}
                    </h2>
                    <Button
                      title="LEARN MORE"
                      variant="small"
                      icon="arrow-right"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="group flex relative h-[650px] overflow-hidden mt-[560px] px-12 py-18 mb-20">
        <Image
          src={retreatsVilaVitaparc}
          fill
          alt={"retreats Vila Vitaparc"}
          quality={100}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-2 flex-1 flex flex-col items-end justify-center gap-4 text-white mt-[246px] mb-[72px]">
          <h2 className="text-h1 cursor-default uppercase">
            Corporate retreats
          </h2>
          <p className="text-subheading2 font-onest max-w-[40%] cursor-default text-end">
            Discover the best venues for company retreats with perfect settings
            for team building and corporate strategy sessions.
          </p>
          <Button
            className="mt-auto"
            title={"Learn more"}
            variant="medium"
            icon="arrow-right"
          />
        </div>
      </div>
    </>
  );
};
