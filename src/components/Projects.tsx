
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
      title: "Tourist Guide Application",
      description:
        "A mobile app leveraging Google Maps API to provide intuitive navigation with features like landmark history and favorites.",
      image: "/asset/tourist-guide.png",
      tags: ["Java", "Android", "Google Maps API", "Firebase"],
      link: "#",
      repo: "#",
    },
    {
      title: "Sah Cut & Edge Website",
      description:
        "Dynamic website showcasing company products, services, and portfolio with integrated contact management system.",
      image: "/asset/Sah_Cut_Edge_Website.png",
      tags: ["PHP", "JavaScript", "Firebase", "Responsive Design"],
      link: "#",
      
    },
    {
      title: "Image Generator Tool",
      description:
        "Tool for design teams to generate and manipulate images, improving design workflows and efficiency.",
      image: "/asset/image-generator.png",
      tags: ["Python", ],
      link: "#",
      repo: "#",
    },
    {
      title: "Client Management Portal",
      description:
        "Comprehensive web application for client interactions and management with user authentication and data tracking.",
      image: "/asset/client-portal.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "#",
      
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
