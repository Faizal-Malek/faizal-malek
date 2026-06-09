import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import InteractiveGrid from "@/components/InteractiveGrid";

const Index = () => {
  useEffect(() => {
    // For smooth animations when page loads
    document.documentElement.style.scrollBehavior = "smooth";

    // Reset scroll position to top when page loads
    window.scrollTo(0, 0);

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Background Interactive Elements */}
      <InteractiveGrid position="top-right" />
      <InteractiveGrid position="bottom-left" />

      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
