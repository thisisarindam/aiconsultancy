import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";

// Scroll to top on route change, but handle hash links for the homepage
function ScrollHandler() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
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
  );
}

export default function App() {
  return (
    <Router basename="/aiconsultancy/">
      <ScrollHandler />
      <div className="mesh-bg min-h-screen text-white overflow-x-hidden relative flex flex-col">
        <CursorGlow />
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </div>

        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  );
}
