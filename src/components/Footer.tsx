
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="section-container py-12">
        <div className="flex flex-col items-center">
          <a href="#" className="text-xl font-bold tracking-tighter font-mono text-white hover:text-emerald-400 transition-colors duration-300 mb-8">
            {`FM_DEV.EXE`}
          </a>

          <div className="flex space-x-4 mb-10">
            <SocialLink
              href="https://github.com/faizal-malek"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/faizal-malek-663a77245/"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:faizalmalek03@icloud.com"
              icon={<Mail className="h-5 w-5" />}
              label="Email"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 font-mono text-[10px] tracking-[0.2em] uppercase">
            {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="text-[10px] font-mono tracking-widest text-gray-600 text-center uppercase">
            <p>
              {`// © ${year} FAIZAL MALEK. ALL_RIGHTS_RESERVED.`}
            </p>
            <p className="mt-2 text-emerald-900">
              {`LOC: PRETORIA_ZA | STACK: REACT_NODE_DOCKER`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
