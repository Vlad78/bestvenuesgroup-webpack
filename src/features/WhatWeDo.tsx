"use client";

import accomodation from "../shared/assets/pictures/whatWeDo/Accommodation.jpg";
import board from "../shared/assets/pictures/whatWeDo/Board meetings.jpg";
import charity from "../shared/assets/pictures/whatWeDo/Charity galas.jpg";
import corporate from "../shared/assets/pictures/whatWeDo/Corporate events.jpg";
import parties from "../shared/assets/pictures/whatWeDo/Parties.jpg";
import venue from "../shared/assets/pictures/whatWeDo/Venue Sourcing.jpg";
import retreatsVilaVitaparc from "@/shared/assets/pictures/RetreatsVilaVitaparc.png";

import Image from "next/image";

// import { ScrollBar, ScrollArea } from "../shared/components/ScrollArea";
import { Button } from "../shared/components/Button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";
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
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState<null | number>(null);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null); // Начальная позиция touch-события

  useEffect(() => {
    // Проверяем, что код выполняется в браузере
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Устанавливаем начальное значение ширины
      setWidth(window.innerWidth);

      // Добавляем слушатель события resize
      window.addEventListener("resize", handleResize);

      // Убираем слушатель при размонтировании компонента
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const margin =
    width !== null
      ? (width - 1312 - 16) / 2 > 0
        ? (width - 1312 - 16) / 2
        : 0
      : 0;
  console.log(margin);

  useLayoutEffect(() => {
    const scrollArea = scrollAreaRef.current;

    // console.log(scrollArea);

    const handleWheel = (event: WheelEvent) => {
      if (isHovered && scrollArea) {
        event.preventDefault();

        scrollArea.scrollBy({
          left: event.deltaY * 4,
          behavior: "smooth",
        });

        if (scrollArea.scrollLeft < 30 && event.deltaY < 0) {
          document.documentElement.scrollBy({
            top: event.deltaY * 3,
            behavior: "smooth",
          });
        }

        if (scrollArea.scrollLeft > 1920 && event.deltaY > 0) {
          document.documentElement.scrollBy({
            top: event.deltaY * 3,
            behavior: "smooth",
          });
        }
      }
    };

    if (scrollArea) {
      scrollArea.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isHovered]);

  useLayoutEffect(() => {
    const scrollArea = scrollAreaRef.current;
    const handleTouchStart = (event: TouchEvent) => {
      if (scrollArea && event.touches.length === 1) {
        touchStartX.current = event.touches[0].clientX; // Запоминаем начальную позицию
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (
        scrollArea &&
        touchStartX.current !== null &&
        event.touches.length === 1
      ) {
        event.preventDefault(); // Предотвращаем стандартное поведение скролла
        const touchMoveX = event.touches[0].clientX;
        const deltaX = touchStartX.current - touchMoveX; // Вычисляем разницу
        scrollArea.scrollBy({
          left: deltaX,
          behavior: "auto", // На iOS smooth может не работать, поэтому используем "auto"
        });
        touchStartX.current = touchMoveX; // Обновляем начальную позицию
      }
    };

    const handleTouchEnd = () => {
      touchStartX.current = null; // Сбрасываем начальную позицию
    };

    if (scrollArea) {
      scrollArea.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      scrollArea.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      scrollArea.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("touchstart", handleTouchStart);
        scrollArea.removeEventListener("touchmove", handleTouchMove);
        scrollArea.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isHovered]);

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
      <section className="w-full overflow-hidden h-[528px]">
        {width && (
          <ScrollArea
            className={cn("overflow-hidden whitespace-nowrap")}
            ref={scrollAreaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex w-max space-x-4"
              style={{ marginLeft: `${margin}px`, marginRight: `${margin}px` }}
            >
              {sections.map((section) => (
                <figure
                  key={section.title}
                  className="group relative flex flex-col justify-end w-[528px] h-[528px] overflow-hidden shrink-0"
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
            <ScrollAreaScrollbar
              orientation="horizontal"
              className="flex select-none touch-none p-1 bg-primary-tan-+1 w-60"
            >
              <ScrollAreaThumb className="flex-1 bg-primary-tan-+4 relative" />
            </ScrollAreaScrollbar>
          </ScrollArea>
        )}
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
