
import React, { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import FadeIn from "./FadeIn";
import { ArrowDownIcon, Sparkles, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/20 pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container text-center z-10">
        <FadeIn delay={200}>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-medium tracking-wider text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-white/20 group">
            <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Full-Stack Developer</span>
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </FadeIn>

        <FadeIn delay={400} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient">
              Hi, I'm
            </span>
            <div className="relative inline-block">
              <TypewriterEffect
                text="Faizal Malek"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"
                delay={800}
                speed={150}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            </div>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Building reliable <span className="font-semibold text-blue-600">enterprise software</span> and <span className="font-semibold text-purple-600">scalable web systems</span> with modern technologies
          </p>
        </FadeIn>

        <FadeIn delay={800}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#about"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full bg-white text-gray-900 font-medium border-2 border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </FadeIn>

        {/* Tech stack floating icons */}
        <FadeIn delay={1000}>
          <div className="flex justify-center items-center gap-6 mt-12 flex-wrap">
            {['React', 'Node.js', 'SQL', 'TypeScript', 'Tailwind'].map((tech, i) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn
        delay={1200}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="focus-ring rounded-full p-3 bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
          <ArrowDownIcon className="h-6 w-6 text-gray-700" />
        </a>
      </FadeIn>

      {/* Enhanced background gradient elements with parallax */}
      <div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl opacity-30 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl opacity-30 animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl opacity-20"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))`,
          transition: 'transform 0.8s ease-out',
        }}
      />
    </section>
  );
};

export default Hero;
