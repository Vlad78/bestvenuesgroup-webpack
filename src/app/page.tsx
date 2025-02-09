import Header from "@/widgets/Header";

import { MovingLogos } from "@/features/MovingLogos";
import { Locations } from "@/features/Locations";

import { WhatWeDo } from "@/features/WhatWeDo";
// import { Button } from "../shared/components/Button";
import { Testimonials } from "../features/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-full">
      <Header className={"sticky top-0"} />
      <main className="flex flex-col items-center justify-items-center w-full mt-[48px]">
        <Wrapper>
          <video autoPlay loop muted className="h-[738px] bg-black">
            <source src="clip.mp4" type="video/mp4" />
          </video>

          <section className="grid grid-cols-1 md:grid-cols-2 h-[480px]">
            <Locations />
          </section>
        </Wrapper>

        <MovingLogos />

        <Wrapper>
          <section>
            <WhatWeDo />
          </section>
        </Wrapper>
        <section>
          <Testimonials />
        </section>
      </main>
    </div>
  );
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[1312px]">{children}</div>;
};
