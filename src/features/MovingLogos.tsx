"use client";

import Marquee from "react-fast-marquee";
import LogoBankOfAmerica from "@/shared/assets/logos/Logo - Bank of America.svg";
import LogoBMO from "@/shared/assets/logos/Logo - BMO.svg";
import LogoCerenceAi from "@/shared/assets/logos/Logo - Cerence ai.svg";
import LogoCHASE from "@/shared/assets/logos/Logo - CHASE.svg";
import LogoColonialConsulting from "@/shared/assets/logos/Logo - Colonial consulting.svg";
import LogoCVC from "@/shared/assets/logos/Logo - CVC.svg";
import LogoHarman from "@/shared/assets/logos/Logo - Harman.svg";
import LogoHarvestPartners from "@/shared/assets/logos/Logo - Harvest Partners.svg";
import LogoLeumi from "@/shared/assets/logos/Logo - Leumi.svg";
import LogoMcKinsey from "@/shared/assets/logos/Logo - McKinsey & Company.svg";
import LogoMSCI from "@/shared/assets/logos/Logo - MSCI.svg";
import { cn } from "@/shared/lib/utils";
import LogoPSP from "@/shared/assets/logos/Logo - PSP.svg";
import LogoRosenberg from "@/shared/assets/logos/Logo - Rosenberg & Estis.svg";
import LogoSymphonyAi from "@/shared/assets/logos/Logo - SymphonyAI.svg";
// import LogoTheUniversityOfChicago from "@/shared/assets/logos/Logo - The university of Chicago.svg";
import LogoZak from "@/shared/assets/logos/Logo - Zak.svg";

export const MovingLogos = ({ className }: { className?: string }) => {
  return (
    <Marquee
      className={cn("my-20", className)}
      autoFill
      pauseOnHover
      direction="right"
    >
      {logos.map((Component, index) => (
        <Component
          key={index}
          alt={`Logo ${index}`}
          className="h-20 w-auto mx-4"
        />
      ))}
    </Marquee>
  );
};

const logos = [
  Marquee,
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
  // LogoTheUniversityOfChicago,
  LogoZak,
];
