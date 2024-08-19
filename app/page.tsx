'use client';
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="flex flex-col justify-center gap-[10vh]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}