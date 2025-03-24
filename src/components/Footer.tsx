
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
    className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-0">
      <div className="items-center justify-center p-3 bg-background/80 backdrop-blur-sm">
    <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-gradient-to-r from-background to-background/95 hover:from-background/95 hover:to-background">

      <div className="section-container ">
        <div className="flex flex-col items-center">
          <a href="#" className="text-lg font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300">
            Faizal Malek
          </a>

          <div className="flex space-x-4 mb-8">
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

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="text-sm text-muted-foreground text-center">
            <p>
              &copy; {year} Faizal Malek. All rights reserved.
            </p>
            <p className="mt-1">
              Software Developer based in Pretoria, South Africa
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
