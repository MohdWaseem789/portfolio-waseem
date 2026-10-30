import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GulfEdge } from "@/components/GulfEdge";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HireTargets } from "@/components/HireTargets";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <HireTargets />
        <GulfEdge />
        <Experience />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
