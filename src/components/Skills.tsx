
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { Code, Database, Layers, PenTool, Server, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  icon,
  skills,
  index,
}) => (
  <FadeIn delay={index * 100}>
    <div className="bg-white rounded-xl p-6 min-h-[200px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 hover:scale-105 border-2 border-gray-50 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-tag px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </FadeIn>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-white" />,
      skills: ["Java", "C#", "JavaScript (ES6+)", "PHP", "Python"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-5 w-5 text-white" />,
      skills: ["React.js", "Node.js", "Firebase", "Yii Framework", "Gradle"],
    },
    {
      title: "Styling & Frontend",
      icon: <PenTool className="h-5 w-5 text-white" />,
      skills: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-5 w-5 text-white" />,
      skills: ["MySQL", "Firebase Realtime Database", "PL/SQL","MongoDB"],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-5 w-5 text-white" />,
      skills: ["Git", "Google Cloud", "Docker", "SDLC"],
    },
    {
      title: "Backend & Infrastructure",
      icon: <Server className="h-5 w-5 text-white" />,
      skills: ["REST APIs", "Cloud Services", "Server Management"],
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle subtitle="MY SKILLS">Technical Expertise</SectionTitle>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>

      <FadeIn delay={100} className="mt-16">
        <div className="bg-white rounded-lg p-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 border-2 border-gray-50">
          <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Soft Skills</h3>
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
            {["Communication", "Problem-Solving", "Collaboration", "Teamwork", "Time Management", "Adaptability", "Critical Thinking", "Attention to Detail"].map((skill, index) => (
              <div key={index} className="flex items-center justify-center p-3 rounded-lg bg-gray-50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 group transition-all duration-300 transform hover:scale-105">
                <span className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors duration-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Skills;
