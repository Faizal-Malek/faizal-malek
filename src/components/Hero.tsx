
import React, { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import FadeIn from "./FadeIn";
import { ArrowDownIcon, Sparkles, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_STACK = [
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "PHP",
  "SQL",
  "Docker",
];

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-[#050505]/88">
      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-900/10 blur-[150px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="section-container text-center z-10">
        <FadeIn delay={200}>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-mono tracking-widest text-emerald-400 bg-white/5 backdrop-blur-md rounded-full transform hover:scale-105 transition-all duration-300 border border-emerald-500/30 group">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SOFTWARE DEVELOPER</span>
            <Code2 className="w-4 h-4" />
          </div>
        </FadeIn>

        <FadeIn delay={400} className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            <span className="block text-white/50 font-light">
              Hi, I'm
            </span>
            <div className="relative inline-block">
              <TypewriterEffect
                text="Faizal Malek"
                className="text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                delay={800}
                speed={150}
              />
            </div>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light font-mono">
            {`> `}Building <span className="text-emerald-400">robust web systems</span> and <span className="text-white">scalable interfaces</span> with surgical precision.
          </p>
        </FadeIn>

        <FadeIn delay={800}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#projects"
              className="group relative px-10 py-4 rounded-lg bg-emerald-600 text-white font-mono text-sm tracking-widest overflow-hidden transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                VIEW_PORTFOLIO
                <Rocket className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative px-10 py-4 rounded-lg bg-white/5 text-white font-mono text-sm tracking-widest border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 backdrop-blur-md"
            >
              <span className="relative z-10">
                GET_IN_TOUCH
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Tech stack floating icons - Glassmorphism */}
        <FadeIn delay={1000}>
          <div className="flex justify-center items-center gap-4 mt-16 flex-wrap">
            {TECH_STACK.map((tech, i) => (
              <div
                key={tech}
                className="px-6 py-2 rounded-md bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-emerald-400/70 hover:text-emerald-400 hover:border-emerald-500/50 hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {`[ ${tech} ]`}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn
        delay={1200}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="focus-ring rounded-full p-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <ArrowDownIcon className="h-5 w-5 text-emerald-500 group-hover:translate-y-1 transition-transform" />
        </a>
      </FadeIn>
    </section>
  );
};

export default Hero;
