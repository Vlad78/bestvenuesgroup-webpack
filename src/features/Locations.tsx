import Image from "next/image";
import newYorkPic from "@/shared/assets/pictures/new-yourk.jpg";
import londonPic from "@/shared/assets/pictures/london.jpg";
import { Button } from "@/shared/components/Button";

const data = [
  {
    image: newYorkPic,
    title: "NEW YORK",
    buttonTitle: "EXPLORE NEW YORK",
    description:
      "Embrace NYC’s Energy, Choose From Chic Rooftops to The Best Event Spaces",
  },
  {
    image: londonPic,
    title: "LONDON",
    buttonTitle: "EXPLORE LONDON",
    description: "Discover London’s Charm, Where History Meets Modernity",
  },
];

export const Locations = () => {
  return data.map((location, index) => (
    <div key={index} className="group relative h-full overflow-hidden">
      {/* <div className="relative bg-cover bg-center h-full bg-[url('./../shared/assets/pictures/new-yourk.jpg')]"> */}
      <Image
        src={location.image}
        fill
        alt={location.title}
        quality={100}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="relative z-2 flex flex-col items-start justify-center gap-4 h-full text-white px-12 py-14">
        <h2 className="text-h1 cursor-default uppercase text-balance">
          {location.title}
        </h2>
        <p className="text-body font-onest max-w-[65%] cursor-default text-balance">
          {location.description}
        </p>
        <Button
          className="mt-auto"
          title={location.buttonTitle}
          variant="medium"
          icon="arrow-right"
        />
      </div>
    </div>
  ));
};
