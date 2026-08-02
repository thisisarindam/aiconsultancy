import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFinder from "@/components/ProblemFinder";
import Services from "@/components/Services";
import Process from "@/components/Process";
import DemoShowcase from "@/components/DemoShowcase";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ThemeToggle from "@/components/ThemeToggle";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="mesh-bg min-h-screen text-white overflow-x-hidden relative">
      <CursorGlow />
      <Navbar />
      <main className={isLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        <Hero />
        <ProblemFinder />
        <Services />
        <Process />
        <DemoShowcase />
        <ROICalculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <ThemeToggle />
      <Footer />
    </div>
  );
}
