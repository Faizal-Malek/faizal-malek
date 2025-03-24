
import React from "react";
import TypewriterEffect from "./TypewriterEffect";
import FadeIn from "./FadeIn";
import { ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/20 pointer-events-none" />
      
      <div className="section-container text-center z-10">
        <FadeIn delay={200}>
          <div className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-wider text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Software Developer
          </div>
        </FadeIn>
        
        <FadeIn delay={400} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Hi, I'm</span>
            <TypewriterEffect
              text="Faizal Malek"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
              delay={800}
              speed={150}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A passionate Software Developer building innovative web & mobile solutions with modern technologies
          </p>
        </FadeIn>
        
        <FadeIn delay={800}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#about" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium border-2 border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent">
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
