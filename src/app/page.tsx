import Header from "@/widgets/Header";

import { MovingLogos } from "@/features/MovingLogos";
import { Locations } from "@/features/Locations";

import { WhatWeDo } from "@/features/WhatWeDo";
// import { Button } from "../shared/components/Button";
import { Testimonials } from "../features/Testimonials";
import { Button } from "../shared/components/Button";

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
        <Wrapper>
          <section>
            <div className="flex items-center h-[196px] bg-primary-tan-0 px-12 py-[54px]">
              <h3 className="w-[60%] text-h3 uppercase select-none text-white">
                Ready to learn how we can make your event exceptional?
              </h3>
              <Button
                variant="large-outlined"
                title="contact us"
                icon="contact"
                className="ml-auto"
              />
            </div>
          </section>
        </Wrapper>
      </main>
    </div>
  );
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[1312px]">{children}</div>;
};
