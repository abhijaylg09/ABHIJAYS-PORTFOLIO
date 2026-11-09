import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Metrics />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

