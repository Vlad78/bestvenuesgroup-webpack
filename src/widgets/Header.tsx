"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-tan-0 text-white px-6 py-4 flex flex-row justify-between items-center h-[92px] w-full">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">BV</span>
        <span className="text-lg font-semibold tracking-wide">BEST VENUES</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
        <div className="relative group">
          <button className="flex items-center gap-1">VENUE FINDING ▼</button>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1">WHAT WE DO ▼</button>
        </div>
        <a href="#" className="hover:underline">
          OUR EVENTS
        </a>
        <a href="#" className="hover:underline">
          ABOUT US
        </a>
      </nav>
      <button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 font-semibold rounded-md shadow">
        <span>💬</span> CONTACT US
      </button>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* <Menu size={24} /> */}
      </button>
    </header>
  );
}
