import Image from "next/image";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div>
      <Intro />
      <Hero />
    </div>
  );
}
