"use client";

import accomodation from "../shared/assets/pictures/whatWeDo/Accommodation.jpg";
import board from "../shared/assets/pictures/whatWeDo/Board meetings.jpg";
import charity from "../shared/assets/pictures/whatWeDo/Charity galas.jpg";
import corporate from "../shared/assets/pictures/whatWeDo/Corporate events.jpg";
import parties from "../shared/assets/pictures/whatWeDo/Parties.jpg";
import venue from "../shared/assets/pictures/whatWeDo/Venue Sourcing.jpg";
import retreatsVilaVitaparc from "@/shared/assets/pictures/RetreatsVilaVitaparc.png";

import Image from "next/image";

import { ScrollBar, ScrollArea } from "../shared/components/ScrollArea";
import { Button } from "../shared/components/Button";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../shared/lib/utils";

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

  return (
    <>
      <Wrapper>
        <section>
          <motion.div
            className="flex flex-col gap-6 max-w-[60%] my-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-h1 uppercase text-balance">
              Every successful event starts with the perfect venue
            </h1>
            <p className="text-subheading1 font-onest text-balance">
              At Best Venues Group, we focus on delivering personalized
              <br />
              venue solutions and full-service event management designed to meet
              your specific objectives.
            </p>
          </motion.div>
        </section>
      </Wrapper>
      <section className="overflow-visible w-full h-[528px]">
        <ScrollArea
          className={cn("overflow-visible whitespace-nowrap ")}
          ref={scrollAreaRef}
        >
          <div className="w-[1312px] mx-auto">
            <div className="flex w-max space-x-4">
              {sections.map((section, i) => (
                <figure
                  key={section.title}
                  className="group relative flex flex-col justify-end w-[528px] h-[528px] overflow-hidden shrink-0"
                  style={
                    i === sections.length - 1
                      ? { marginRight: "calc((100vw - 1312px) / 2);" }
                      : {}
                  }
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
                    <h2 className="text-h3 text-white cursor-default text-balance">
                      {section.title}
                    </h2>
                    <Button
                      title="LEARN MORE"
                      variant="small"
                      icon="arrow-right"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
          {/* <ScrollBar
            orientation="horizontal"
            className="bg-gray-5 opacity-30 rounded-full w-[1312px] mx-auto"
            style={{ bottom: "-12px" }}
          /> */}
        </ScrollArea>
      </section>
      <Wrapper>
        <section>
          <div className="group flex relative h-[650px] overflow-hidden mt-8 px-12 py-18">
            <Image
              src={retreatsVilaVitaparc}
              fill
              alt={"retreats Vila Vitaparc"}
              quality={100}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <motion.div
              className="relative z-2 flex-1 flex flex-col items-end justify-center gap-4 text-white mt-[246px] mb-[72px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h1 cursor-default uppercase">
                Corporate retreats
              </h2>
              <p className="text-subheading2 font-onest max-w-[40%] cursor-default text-end">
                Discover the best venues for company retreats with perfect
                settings for team building and corporate strategy sessions.
              </p>
              <Button
                className="mt-auto"
                title={"Learn more"}
                variant="medium"
                icon="arrow-right"
              />
            </motion.div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[1312px]">{children}</div>;
};
