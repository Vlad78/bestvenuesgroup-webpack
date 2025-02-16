"use client";

import Marquee from "react-fast-marquee";
import LogoBankOfAmerica from "@/shared/assets/logos/Logo - Bank of America.svg";
import LogoBMO from "@/shared/assets/logos/Logo - BMO.svg";
import LogoCerenceAi from "@/shared/assets/logos/Logo - Cerence ai";
import LogoCHASE from "@/shared/assets/logos/Logo - CHASE.svg";
import LogoColonialConsulting from "@/shared/assets/logos/Logo - Colonial consulting.png";
import LogoCVC from "@/shared/assets/logos/Logo - CVC";
import LogoHarman from "@/shared/assets/logos/Logo - Harman.svg";
import LogoHarvestPartners from "@/shared/assets/logos/Logo - Harvest Partners";
import LogoLeumi from "@/shared/assets/logos/Logo - Leumi.svg";
import LogoMcKinsey from "@/shared/assets/logos/Logo - McKinsey & Company.png";
import LogoMSCI from "@/shared/assets/logos/Logo - MSCI.svg";
import { cn } from "@/shared/lib/utils";
import LogoPSP from "@/shared/assets/logos/Logo - PSP.svg";
import LogoRosenberg from "@/shared/assets/logos/Logo - Rosenberg & Estis.png";
import LogoSymphonyAi from "@/shared/assets/logos/Logo - SymphonyAI.png";
import LogoTheUniversityOfChicago from "@/shared/assets/logos/Logo - The university of Chicago";
import LogoZak from "@/shared/assets/logos/Logo - Zak.png";
import Image from "next/image";

export const MovingLogos = ({ className }: { className?: string }) => {
  return (
    <Marquee className={cn(className)} autoFill direction="left">
      {logos.map((Component, index) =>
        typeof Component === "function" ? (
          <Component key={index} alt={`Logo ${index}`} className="mx-8" />
        ) : (
          <Image
            key={index}
            src={Component}
            quality={100}
            alt={`Logo ${index}`}
            className="mx-8"
          />
        )
      )}
    </Marquee>
  );
};

const logos = [
  LogoBankOfAmerica,
  LogoBMO,
  LogoCerenceAi,
  LogoCHASE,
  LogoColonialConsulting,
  LogoCVC,
  LogoHarman,
  LogoHarvestPartners,
  LogoLeumi,
  LogoMcKinsey,
  LogoMSCI,
  LogoPSP,
  LogoRosenberg,
  LogoSymphonyAi,
  LogoTheUniversityOfChicago,
  LogoZak,
];
