
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
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
        <div className="aspect-video bg-[#111] relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] bg-emerald-500/10">
            <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white rounded-full p-3 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white rounded-full p-3 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 font-mono tracking-tight">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-emerald-400/70 text-[10px] font-mono uppercase tracking-widest group-hover:border-emerald-500/30 transition-all">
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
      title: "Impact Settlement Capital",
      description:
        "Fintech platform bridging traditional finance and the decentralized digital economy, democratizing access to Real World Assets (RWAs) through blockchain integration.",
      image: "/asset/impact_settlement.png",
      tags: ["React 19", "TypeScript", "Blockchain", "RWA", "Fintech"],
      link: "https://impact-settlement-capital.vercel.app",
      repo: "https://github.com/Faizal-Malek/Impact-Settlement-Capital",
    },
    {
      title: "Planera Marketplace",
      description:
        "Comprehensive multi-role project management and marketplace platform featuring role-based dashboards (Admin, Client, Employee) with customized workflows.",
      image: "/asset/planera.png",
      tags: ["React", "TypeScript", "GSAP", "Glassmorphism", "Marketplace"],
      link: "https://planera-orcin.vercel.app",
    },
    {
      title: "Libertas Client Portal",
      description:
        "Production-ready client management system featuring a dual-interface for admins and clients, real-time analytics, and automated reporting.",
      image: "/asset/Libertas_Client_Portal.png",
      tags: ["React", "Firebase", "Docker", "Analytics"],
      link: "https://libertas-client-portal.web.app/super-admin",
    },
    {
      title: "Urban Tokenization Survey",
      description:
        "Full-stack survey platform with advanced analytics dashboard, AI-generated insights, and data visualization for urban planning.",
      image: "/asset/urbin-tokenization.png",
      tags: ["TypeScript", "React", "Node.js", "MongoDB"],
      link: "https://urban-tokenization-survey.vercel.app",
      repo: "https://github.com/Faizal-Malek/urban-tokenization-survey",
    },
    {
      title: "Beyond Horizons Website",
      description:
        "Designed and developed the full BHS website from scratch using WordPress, focusing on layout, animations, and responsive design.",
      image: "/asset/Beyond_Horizons_Website.png",
      tags: ["WordPress", "Design", "PHP", "Responsive"],
      link: "https://beyondhorizonsstudios.com",
    },
    {
      title: "Tourist Guide App",
      description:
        "Android navigation app in Java using Android Studio that lets users explore tourist spots with real-time location data and Google Maps integration.",
      image: "/asset/tourist-guide.png",
      tags: ["Java", "Android", "Google Maps", "Firebase"],
      repo: "https://github.com/Faizal-Malek",
    },
  ];

  return (
    <Section id="projects" className="bg-[#050505]/88">
      <div className="">
        <SectionTitle subtitle="LATEST_DEPLOYMENTS">Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        <FadeIn className="mt-20 text-center">
          <p className="text-gray-500 font-mono text-xs tracking-widest mb-6">
            {`// `}More projects available on my GitHub profile
          </p>
          <a 
            href="https://github.com/Faizal-Malek" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs font-mono tracking-widest hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
          >
            VIEW_ALL_REPOS
            <Github className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Projects;
