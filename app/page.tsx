import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Navbar />
      <Hero />
    </main>
  );
}
