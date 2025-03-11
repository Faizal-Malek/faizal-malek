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
    <div className="p-6 rounded-lg bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(210,210,210)] transition-transform duration-300 hover:scale-105">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </FadeIn>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and intuitive web applications using modern frameworks like React, Node.js and more.",
      icon: <Code2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile applications with a focus on performance and user experience.",
      icon: <Smartphone className="h-6 w-6 text-primary" />
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications with Java, PHP, and Node.js with secure API design.",
      icon: <Server className="h-6 w-6 text-primary" />
    },
    {
      title: "Database Solutions",
      description: "Designing and implementing efficient database architectures with MySQL and Firebase Realtime Database.",
      icon: <Database className="h-6 w-6 text-primary" />
    },
    {
      title: "UI/UX Implementation",
      description: "Translating designs into functional, responsive interfaces with modern CSS frameworks like Tailwind.",
      icon: <Layout className="h-6 w-6 text-primary" />
    },
    {
      title: "DevOps Integration",
      description: "Implementing CI/CD pipelines and containerizing applications with Docker for consistent environments.",
      icon: <Cog className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <Section id="services">
      <SectionTitle subtitle="MY SERVICES">What I Offer</SectionTitle>
      
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