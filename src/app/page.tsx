import Image from "next/image";
import Header from "../widgets/Header";
import { Button } from "@/shared/components/Button";
import newYorkPic from "@/shared/assets/pictures/new-yourk.jpg";
import londonPic from "@/shared/assets/pictures/london.jpg";
import { MovingLogos } from "../features/MovingLogos";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-full">
      <Header className={"sticky top-0"} />
      <main className="flex flex-col items-center justify-items-center w-full">
        <Wrapper>
          <video autoPlay loop muted>
            <source src="clip.mp4" type="video/mp4" />
          </video>

          <section className="grid grid-cols-1 md:grid-cols-2 h-[480px]">
            {/* New York Section */}
            {/* <div className="relative bg-cover bg-center h-full bg-[url('./../shared/assets/pictures/new-yourk.jpg')]"> */}
            <div className="relative h-full">
              <Image
                src={newYorkPic}
                fill
                alt="New York"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-2 flex flex-col items-start justify-center gap-4 h-full text-white px-12 py-14">
                <h2 className="text-h1">NEW YORK</h2>
                <p className="text-body font-onest max-w-[60%]">
                  Embrace NYC’s Energy, Choose From Chic Rooftops to The Best
                  Event Spaces
                </p>
                <Button
                  className="mt-auto"
                  title="EXPLORE NEW YORK"
                  variant="medium"
                  icon="arrow-right"
                />
              </div>
            </div>

            {/* London Section */}
            {/* <div className="relative bg-cover bg-center h-full bg-[url('./../shared/assets/pictures/london.jpg')]"> */}
            <div className="relative h-full">
              <Image
                src={londonPic}
                fill
                alt="London"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-2 flex flex-col items-start justify-center gap-4 h-full text-white px-12 py-14">
                <h2 className="text-h1">LONDON</h2>
                <p className="text-body font-onest max-w-[60%]">
                  Discover London’s Charm, Where History Meets Modernity
                </p>
                <Button
                  className="mt-auto"
                  title="EXPLORE LONDON"
                  variant="medium"
                  icon="arrow-right"
                />
              </div>
            </div>
          </section>
        </Wrapper>

        <MovingLogos />
      </main>
    </div>
  );
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[1312px]">{children}</div>;
};
