import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { Code2, Smartphone, Database, Layout, Server, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => (
  <FadeIn delay={index * 100}>
    <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md group hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] h-full">
      <div className="h-14 w-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 transform group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300 font-mono tracking-tighter uppercase">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{description}</p>
    </div>
  </FadeIn>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Engineering",
      description: "Architecting high-performance web applications using the React ecosystem and modern TypeScript standards.",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: "Mobile Architecture",
      description: "Developing cross-platform mobile solutions with a focus on native performance and fluid user interactions.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Backend Systems",
      description: "Building scalable server-side logic and secure RESTful APIs using Node.js, PHP, and Java environments.",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "Data Management",
      description: "Designing efficient database schemas and optimizing complex queries for relational and real-time data systems.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "UI/UX Development",
      description: "Implementing sophisticated, responsive interfaces with precision using Tailwind CSS and modern styling tools.",
      icon: <Layout className="h-6 w-6" />
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamlining development lifecycles through Docker containerization and automated deployment workflows.",
      icon: <Cog className="h-6 w-6" />
    }
  ];

  return (
    <Section id="services" className="bg-[#080808]/90">
      <SectionTitle subtitle="SERVICE_MODULES">What I Offer</SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
