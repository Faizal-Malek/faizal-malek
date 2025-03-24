
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { FileCode, Users, Lightbulb, GitMerge } from "lucide-react";

const About: React.FC = () => {
  const qualities = [
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: "Technical Expertise",
      description:
        "Skilled in modern frameworks like React, Node.js, and Firebase with experience in building dynamic web applications and mobile apps.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description:
        "Strong ability to collaborate across teams, delivering projects on time and within scope while maintaining clear communication.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Problem Solver",
      description:
        "Passionate about finding elegant solutions to complex problems through creative thinking and analytical approach.",
    },
    {
      icon: <GitMerge className="h-6 w-6 text-primary" />,
      title: "Continuous Learning",
      description:
        "Dedicated to staying current with emerging technologies and constantly expanding skills to deliver cutting-edge solutions.",
    },
  ];

  return (
    <Section id="about">
      <SectionTitle subtitle="ABOUT ME">
        Passionate Software Developer
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/asset/Faizal.jpg" 
                alt="Faizal Malek" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg" />
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <div className="space-y-4">
            <h6 className="= text-[17px] font-bold">
            A Passionate Software Developer with a Focus on Innovation and Problem-Solving
            </h6>
            <p className="text-muted-foreground">
            I am a dedicated <strong>Software Developer</strong> skilled in <strong> React, Node.js,</strong> and <strong>Firebase</strong>, with experience in building dynamic web and mobile applications. I thrive on solving complex problems with creative and analytical thinking, delivering scalable and efficient solutions.
            </p>
            <p className="text-muted-foreground">
            Committed to continuous learning, I stay updated with emerging technologies to deliver cutting-edge solutions. Proficient in <strong>PHP</strong>, <strong>Yii framework </strong>, and<strong> Java</strong>, I bring a collaborative mindset and a passion for innovation to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p className="font-medium">Faizal Malek</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="font-medium">Erasmia, Pretoria</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <a href="mailto:faizalmalek03@icloud.com" className="font-medium hover:text-primary">
                  faizalmalek03@icloud.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <a href="tel:0760205904" className="font-medium hover:text-primary">
                  076 020 5904
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 ">
        {qualities.map((quality, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="bg-white rounded-lg p-6 shadow-sm border card-hover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.01),_10px_10px_30px_4px_rgba(210,210,210)] rounded-lg items-center justify-center p-3">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-4">
                {quality.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{quality.title}</h3>
              <p className="text-sm text-muted-foreground">
                {quality.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default About;
