
import React from "react";
import TypewriterEffect from "./TypewriterEffect";
import FadeIn from "./FadeIn";
import { ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
      
      <div className="section-container text-center z-10">
        <FadeIn delay={200}>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
            Software Developer
          </div>
        </FadeIn>
        
        <FadeIn delay={400} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="block">Hi, I'm</span>
            <TypewriterEffect
              text="Faizal Malek"
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
              delay={800}
              speed={150}
            />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Software Developer building innovative web & mobile solutions with modern technologies
          </p>
        </FadeIn>
        
        <FadeIn delay={800}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#about" className="btn-primary bg-blue-600">
              Learn More
            </a>
            <a href="#contact" className="btn-secondary border border-black">
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>
      
      <FadeIn
        delay={1200}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="focus-ring rounded-full p-2">
          <ArrowDownIcon className="h-6 w-6 text-muted-foreground" />
        </a>
      </FadeIn>
      
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-30" />
    </section>
  );
};

export default Hero;
