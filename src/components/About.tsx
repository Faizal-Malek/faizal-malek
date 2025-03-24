
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
          <div className="relative group">
            <div className="aspect-square bg-muted rounded-xl overflow-hidden shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] group-hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 group-hover:scale-105">
              <div className="relative w-full h-full">
                <img 
                  src="/asset/Faizal.jpg" 
                  alt="Faizal Malek" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl" />
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <div className="space-y-4 p-6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 hover:scale-105 border-2 border-gray-50 group">
            <h6 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
              A Passionate Software Developer with a Focus on Innovation and Problem-Solving
            </h6>
            <p className="text-muted-foreground">
              I am a dedicated <strong>Software Developer</strong> skilled in <strong>React, Node.js,</strong> and <strong>Firebase</strong>, with experience in building dynamic web and mobile applications. I thrive on solving complex problems with creative and analytical thinking, delivering scalable and efficient solutions.
            </p>
            <p className="text-muted-foreground">
              Committed to continuous learning, I stay updated with emerging technologies to deliver cutting-edge solutions. Proficient in <strong>PHP</strong>, <strong>Yii framework </strong>, and<strong> Java</strong>, I bring a collaborative mindset and a passion for innovation to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 p-4 rounded-lg bg-gray-50/50">
              <div className="space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-colors duration-300">
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p className="font-medium">Faizal Malek</p>
              </div>
              <div className="space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-colors duration-300">
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="font-medium">Erasmia, Pretoria</p>
              </div>
              <div className="space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-colors duration-300">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <a href="mailto:faizalmalek03@icloud.com" className="font-medium hover:text-primary transition-colors duration-300">
                  faizalmalek03@icloud.com
                </a>
              </div>
              <div className="space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-colors duration-300">
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <a href="tel:0760205904" className="font-medium hover:text-primary transition-colors duration-300">
                  076 020 5904
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {qualities.map((quality, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="group bg-white rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 p-6 border-2 border-gray-50">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 transform group-hover:scale-110">
                <div className="group-hover:text-white transition-colors duration-300">
                  {quality.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{quality.title}</h3>
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
