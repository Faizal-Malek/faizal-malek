
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: React.ReactNode;
  isEducation?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  isEducation = false,
  isLast = false,
}) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
          {isEducation ? (
            <GraduationCap className="h-5 w-5 text-white" />
          ) : (
            <Briefcase className="h-5 w-5 text-white" />
          )}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 flex-1 my-2"></div>}
      </div>
      <div className={cn("pb-8 group", isLast && "pb-0")}>
        <div className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider text-muted-foreground bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
          {date}
        </div>
        <h3 className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">{title}</h3>
        {company && (
          <p className="text-primary font-medium text-sm mb-2 hover:text-blue-600 transition-colors duration-300">{company}</p>
        )}
        <div className="mt-2 text-muted-foreground text-sm p-4 rounded-lg bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[-15px_-15px_35px_4px_rgba(0,0,0,0.15),_15px_15px_35px_4px_rgba(45,78,255,0.2)] transition-all duration-300 hover:scale-105 border-2 border-gray-50">{description}</div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="">
      <SectionTitle subtitle="MY JOURNEY">Experience & Education</SectionTitle>

      <div className="max-w-3xl mx-auto">
      <FadeIn delay={200}>
          <TimelineItem
            date="2025"
            title="PHP & Yii Framework Training"
            company="Zilo Group"
            description={
              <ul className="list-disc pl-4 space-y-1">
                <li>Trained in PHP and Yii framework to build robust web applications</li>
                <li>Performed debugging tasks and resolved issues to ensure optimal application performance</li>
                <li>Gained hands-on experience in developing scalable and maintainable web solutions</li>
              </ul>
            }
          />
        </FadeIn>
        <FadeIn>
          <TimelineItem
            date="Feb 2023 - Present"
            title="Junior Software Developer"
            company="Libex"
            description={
              <ul className="list-disc pl-4 space-y-1">
                <li>Built an image generator for design teams, improving design workflows and efficiency</li>
                <li>Developed a comprehensive web application for client interactions using WordPress</li>
                <li>Utilized Docker to streamline development workflows by containerizing applications, ensuring consistent environments across development, testing, and production</li>
                <li>Collaborated with cross-functional teams to deliver projects on time and within scope</li>
              </ul>
            }
          />
        </FadeIn>



        <FadeIn delay={300}>
          <TimelineItem
            date="2022"
            title="Tourism Guide Application Project"
            description={
              <ul className="list-disc pl-4 space-y-1">
                <li>Leveraged Google Maps API to create an intuitive navigation tool, integrating features like landmark history and favoriting</li>
                <li>Backed by Firebase for seamless data management, developed using Java in Android Studio</li>
                <li>Ensured smooth user experience and real-time data synchronization</li>
              </ul>
            }
          />
        </FadeIn>

        <FadeIn delay={400}>
          <TimelineItem
            date="2021"
            title="Web Application Development"
            company="Sah Cut & Edge"
            description={
              <ul className="list-disc pl-4 space-y-1">
                <li>Designed and developed a dynamic website using PHP and JavaScript, highlighting the company's products, services, and proof of work</li>
                <li>Integrated a 'Contact Us' form for handling inquiries, backed by Firebase Realtime Database API for efficient data management</li>
              </ul>
            }
          />
        </FadeIn>

        <FadeIn delay={500}>
          <TimelineItem
            date="Feb 2020 - Dec 2022"
            title="Diploma in Information Technology (Software Development)"
            company="Rosebank College"
            description={
              <ul className="list-disc pl-4 space-y-1">
                <li>Specialized in advanced database systems (PL/SQL) and cloud-based solutions (Google Cloud, Firebase)</li>
                <li>Completed significant projects in web and mobile app development</li>
              </ul>
            }
            isEducation
            isLast
          />
        </FadeIn>
      </div>
    </Section>
  );
};

export default Experience;
