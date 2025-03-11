
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
    <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(210,210,210)] rounded-xl p-6 min-h-[200px] shadow-xl border card-hover ">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-tag p-1 min-w-5 min-h-2 bg-gray-100 text-gray-800 hover:bg-primary/10">
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
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Java", "C#", "JavaScript (ES6+)", "PHP", "Python"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-5 w-5 text-primary" />,
      skills: ["React.js", "Node.js", "Firebase", "Yii Framework", "Gradle"],
    },
    {
      title: "Styling & Frontend",
      icon: <PenTool className="h-5 w-5 text-primary" />,
      skills: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "Firebase Realtime Database", "PL/SQL","MongoDB"],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: ["Git", "Google Cloud", "Docker", "SDLC"],
    },
    {
      title: "Backend & Infrastructure",
      icon: <Server className="h-5 w-5 text-primary" />,
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
        <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(210,210,210)] rounded-lg p-6 border">
          <h3 className="text-xl font-medium mb-4 text-center">Soft Skills</h3>
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
            {["Communication", "Problem-Solving", "Collaboration", "Teamwork", "Time Management", "Adaptability", "Critical Thinking", "Attention to Detail"].map((skill, index) => (
              <div key={index} className="flex items-center justify-center p-3 rounded-md bg-background ">
                <span  className="text-sm font-medium text-black hover:scale-[1.1] hover:cursor-pointer hover:underline">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Skills;
