import Image from "next/image";
import image1 from "@/shared/assets/pictures/aboutUs/01.png";
import image2 from "@/shared/assets/pictures/aboutUs/02.png";
import { Button } from "@/shared/components/Button";

const data = [
  {
    image: image1,
    title: "Our events",
    buttonTitle: "View Our Portfolio",
    description:
      "From international corporate retreats to enchanting galas. Discover our past projects and let us inspire your next event.",
  },
  {
    image: image2,
    title: "About Us",
    buttonTitle: "Get to Know Us",
    description:
      "Partner with us to experience exceptional service and innovative solutions, backed by a team that values quality and reliability.",
  },
];

export const AboutUs = () => {
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
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-2 flex flex-col items-start justify-center gap-4 h-full text-white px-12 py-14">
        <h2 className="text-h1 cursor-default uppercase">{location.title}</h2>
        <p className="text-body font-onest max-w-[65%] cursor-default">
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
