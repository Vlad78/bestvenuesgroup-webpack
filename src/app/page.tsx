import Image from "next/image";
import Header from "../widgets/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-full">
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold">Welcome to Best Venues</h1>
        <p className="mt-4 text-lg">
          Find the perfect venue for your next event with us.
        </p>
      </main>
    </div>
  );
}
