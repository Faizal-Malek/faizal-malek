
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  repo,
  index,
}) => {
  return (
    <FadeIn delay={index * 100} direction={index % 2 === 0 ? "right" : "left"}>
      <div className="bg-white rounded-xl overflow-hidden shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 hover:scale-105 border-2 border-gray-50 group">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="w-full h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                {title.substring(0, 2).toUpperCase()}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:shadow-lg"
                aria-label={`View ${title} live`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 hover:shadow-lg"
                aria-label={`View ${title} repository`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Libertas Client Portal",
      description:
        "Production-ready client management system featuring a dual-interface for admins and clients, real-time analytics, and automated reporting.",
      image: "/asset/client-portal.png",
      tags: ["React", "Firebase", "Docker", "Analytics"],
      link: "https://libertas-client-portal.web.app/super-admin",
    },
    {
      title: "Urban Tokenization Survey",
      description:
        "Full-stack survey platform with advanced analytics dashboard, AI-generated insights, and data visualization for urban planning.",
      image: "/asset/web-app.png",
      tags: ["TypeScript", "React", "Node.js", "MongoDB", "Recharts"],
      link: "https://urban-tokenization-survey.vercel.app",
      repo: "https://github.com/Faizal-Malek/urban-tokenization-survey",
    },
    {
      title: "Login & Signup System",
      description:
        "Robust authentication system implementing best practices with secure login, user registration, and session management.",
      image: "/asset/web-app.png",
      tags: ["React", "Firebase", "Authentication"],
      link: "https://loginsystem-fm.web.app",
      repo: "https://github.com/Faizal-Malek/loginAndSignupSystem",
    },
    {
      title: "YOUR-TIME-WISER",
      description:
        "Hackathon Winning Project: A smart time management and productivity application for efficient task tracking.",
      image: "/asset/time-wiser.png",
      tags: ["Java", "Android", "Hackathon Winner"],
      repo: "https://github.com/Faizal-Malek/YOUR-TIME-WISER",
    },
  ];

  return (
    <Section id="projects" className="">
      <div className="">
        <SectionTitle subtitle="MY WORK">Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            These projects showcase my skills and experience in developing real-world applications using various technologies
          </p>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Projects;
