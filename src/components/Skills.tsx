
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
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 min-h-[220px] group hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transform group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300 font-mono uppercase">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-mono tracking-tighter hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300">
            {`// ${skill}`}
          </span>
        ))}
      </div>
    </div>
  </FadeIn>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3/SCSS", "PHP", "Java", "SQL"],
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-6 w-6" />,
      skills: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "Yii Framework"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "Firebase Realtime Database", "PL/SQL"],
    },
    {
      title: "CMS & Tools",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["WordPress", "Git", "Docker", "Agile/Scrum", "Android Studio"],
    },
    {
      title: "Cloud Services",
      icon: <Server className="h-6 w-6" />,
      skills: ["Google Cloud Platform", "Firebase"],
    },
  ];

  return (
    <Section id="skills" className="bg-[#050505]">
      <SectionTitle subtitle="CORE_COMPETENCIES">Technical Expertise</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-8 group transition-all duration-500">
          <h3 className="text-xl font-bold mb-8 text-center text-white font-mono uppercase tracking-widest">{`[ soft_skills ]`}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Communication", "Problem-Solving", "Collaboration", "Teamwork", "Time Management", "Adaptability", "Critical Thinking", "Attention to Detail"].map((skill, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-emerald-500/30 transition-all duration-300">
                <span className="text-xs font-mono text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Skills;
