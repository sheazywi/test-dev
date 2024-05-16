import Image from "next/image";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team"

export default function Home() {
  return (
    <div>
        <Hero />
        <Team />
        <Newsletter />
    </div>
  );
}
