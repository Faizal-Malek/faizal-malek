
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
    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-0">
      <div className=" items-center justify-center p-3  bg-background">
    <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.001),-10px_-10px_30px_4px_rgba(210,210,210)] rounded-lg">

      <div className="section-container ">
        <div className="flex flex-col items-center">
          <a href="#" className="text-lg font-bold tracking-tight mb-8">
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
