"use client";

import { Button } from "@/shared/components/Button";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 3,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-[1352px]">
      <div className="flex flex-col gap-8 mt-20 mb-[100px]">
        <Button
          title="see more"
          variant="small"
          icon="arrow-right"
          className="bg-gray-1 w-fit mr-5 self-end"
          onClick={scrollNext}
        />
        <div ref={emblaRef} className="overflow-hidden p-5">
          <div className="flex -ml-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 pl-10">
                <div className="h-[540px] flex flex-col items-start justify-between p-12 pb-14 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.08)] transition-shadow duration-300 ease-in-out hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.11)]">
                  <p className="text-body font-onest cursor-default select-none">
                    {testimonial.comment}
                  </p>
                  <h5 className="text-h5 uppercase cursor-default select-none">
                    {testimonial.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "ALEJANDRO ALMAGUER",
    comment:
      "We are a Destination Management Company that works with VIP groups. Best Venue New York has been instrumental in helping us find the right places for our groups and making the relationship with the venues seamless. Fauth Pentek has been very helpful and dedicated. We strongly recommend working with them.",
  },
  {
    name: "NOLA DMC",
    comment:
      "We have had a fantastic experience partnering with Best Venues New York! Their attention to detail in planning each event has been exceptional!",
  },
  {
    name: "STUART LUCKS",
    comment:
      "Anna and the Best Venues team did an amazing job coordinating our company 100th Year Anniversary party. From finding the right venue, to choosing a great menu, sourcing terrific vendors for flowers, photography, sound, and light - it all came out perfectly.",
  },
  {
    name: "CHRISTIAN MELE",
    comment:
      "Don’t bother looking anywhere else for help with your events. As event planners ourselves, we’ve worked with countless Venue Search teams across the country and none have come close to the level of help that Grace from Best Venues NYC gave us. We were blown away by the level of service they provided and are quite honestly shocked that it was free. Thanks Grace & BVNY!",
  },
  {
    name: "ANDY LEFKOWITZ",
    comment:
      "My representative at Best Venues made the experience super easy. For my event, I was matched with a beautiful new space downtown, led by a professional, organized, and friendly team who made sure everything happened perfectly.",
  },
  {
    name: "JOHN LIU",
    comment:
      "I work for a non-profit and I was tasked with finding a venue for our year end Winter Event, which is like being stuck in a rock and a hard place due to the limited space and resources being a non-profit. However Sandra was quick to think of ideas and offer suggestions and I was able to find a venue close to the middle of December that was classy and very reasonable priced. I would definitely recommend her and Best Venues New York for the future.",
  },
];
