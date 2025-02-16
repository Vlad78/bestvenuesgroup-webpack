import Header from "@/widgets/Header";

import { MovingLogos } from "@/features/MovingLogos";
import { Locations } from "@/features/Locations";

import { WhatWeDo } from "@/features/WhatWeDo";
import { Testimonials } from "@/features/Testimonials";
import { AboutUs } from "@/features/AboutUs";

import { ContactUs } from "../features/ContactUs";
import { Subscribe } from "../features/Subscribe";

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

        <MovingLogos className="h-20 my-20" />

        {/* <Wrapper> */}
        {/* <section> */}
        <WhatWeDo />
        {/* </section> */}
        {/* </Wrapper> */}

        <section>
          <Testimonials />
        </section>
        <Wrapper>
          <section>
            <ContactUs />
          </section>
          <section className="mt-[100px] flex gap-8 h-[480px]">
            <AboutUs />
          </section>
          <section className="mt-8 mb-[100px]">
            <Subscribe />
          </section>
        </Wrapper>
      </main>
    </div>
  );
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[1312px]">{children}</div>;
};
