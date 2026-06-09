
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { FileCode, Users, Lightbulb, GitMerge } from "lucide-react";

const About: React.FC = () => {
  const qualities = [
    {
      icon: <FileCode className="h-6 w-6" />,
      title: "Full-Stack Engineering",
      description:
        "Building production-ready applications across the entire stack, from reactive frontends to robust server-side logic.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Agile Collaboration",
      description:
        "Experienced in working within cross-functional teams using Agile methodologies to deliver high-quality software.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description:
        "Passionate about the problem-solving side of development, staying curious about how things work under the hood.",
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "DevOps & Deployment",
      description:
        "Utilizing Docker and modern CI/CD practices to ensure consistent and reliable deployments across environments.",
    },
  ];

  return (
    <Section id="about" className="bg-[#050505]">
      <SectionTitle subtitle="SYSTEM_MANIFESTO">
        Software Developer
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="relative group">
            <div className="aspect-square bg-[#111] rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="relative w-full h-full">
                <img
                  src="/asset/Faizal.jpg"
                  alt="Faizal Malek"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            {/* Liquid glass accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-[60px] animate-pulse -z-10" />
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-emerald-500/30 transition-all duration-500">
            <h6 className="text-xl font-bold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors duration-300 uppercase">
              {`[ dev_profile ]`}
            </h6>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed font-light">
                I'm a <span className="text-white font-medium">software developer</span> based in Pretoria with a few years of experience building things for the web — mostly on the front end, though I'm comfortable working across the stack.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                I got into development through a three-year IT diploma at <span className="text-emerald-500/80">Rosebank College</span> and have been hands-on ever since, working across contract and full-time roles while picking up new tools as projects demanded them.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                I enjoy the <span className="text-emerald-400">problem-solving</span> side of development as much as the building side, and I tend to stay curious about how things work under the hood.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 p-6 rounded-xl bg-white/5 border border-white/5 font-mono text-[11px]">
              <div className="space-y-1">
                <p className="text-emerald-500/50 uppercase tracking-widest">Name</p>
                <p className="text-white">Faizal Malek</p>
              </div>
              <div className="space-y-1">
                <p className="text-emerald-500/50 uppercase tracking-widest">Location</p>
                <p className="text-white">Pretoria, ZA</p>
              </div>
              <div className="space-y-1">
                <p className="text-emerald-500/50 uppercase tracking-widest">Status</p>
                <p className="text-emerald-400 animate-pulse">AVAILABLE_FOR_WORK</p>
              </div>
              <div className="space-y-1">
                <p className="text-emerald-500/50 uppercase tracking-widest">Focus</p>
                <p className="text-white">Web Engineering</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {qualities.map((quality, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-500 h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="h-14 w-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <div className="text-emerald-400 group-hover:text-white transition-colors duration-300">
                  {quality.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 font-mono tracking-tighter uppercase">{quality.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {quality.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default About;
