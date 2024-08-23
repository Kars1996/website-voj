'use client';
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects"

import Loading from "./components/cool-loading"
import { useEffect } from 'react';
import { RemoveScroll } from "react-remove-scroll";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <RemoveScroll>
      <main className="flex flex-col justify-center gap-[10vh]">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        
        
        <Loading />
        
      </main>
    </RemoveScroll>
  );
}