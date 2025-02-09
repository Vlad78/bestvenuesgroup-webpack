import Header from "@/widgets/Header";

import { MovingLogos } from "@/features/MovingLogos";
import { Locations } from "@/features/Locations";

import { WhatWeDo } from "@/features/WhatWeDo";
// import { Button } from "../shared/components/Button";
import { Testimonials } from "../features/Testimonials";
import { Button } from "../shared/components/Button";
import { AboutUs } from "../features/AboutUs";
import { Input } from "../shared/components/Input";

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
          <section className="mt-[100px] flex gap-8 h-[480px]">
            <AboutUs />
          </section>
          <section className="mt-8 mb-[100px]">
            <div className="flex items-center gap-4 h-[144px] bg-gray-8 px-12">
              <h4 className="text-h4 text-white uppercase w-[60%] mr-auto select-none">
                Subscribe to our newsletter
              </h4>
              <div className="flex items-center justify-end w-[40%] gap-4 ">
                <Input
                  type="text"
                  placeholder="Your email address"
                  className="font-onest text-body placeholder:text-body "
                />
                <Button
                  variant="medium-outlined"
                  title="subscribe"
                  icon="bell"
                  className=""
                />
              </div>
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
