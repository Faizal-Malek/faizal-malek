
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
    <div className="flex gap-4 md:gap-6 group">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          {isEducation ? (
            <GraduationCap className="h-5 w-5 text-emerald-400" />
          ) : (
            <Briefcase className="h-5 w-5 text-emerald-400" />
          )}
        </div>
        {!isLast && <div className="w-[1px] bg-gradient-to-b from-emerald-500/50 to-transparent flex-1 my-2"></div>}
      </div>
      <div className={cn("pb-12", isLast && "pb-0")}>
        <div className="inline-block px-3 py-1 mb-2 text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 rounded-md">
          {date}
        </div>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
        {company && (
          <p className="text-emerald-500/70 font-mono text-xs mb-4">{company}</p>
        )}
        <div className="text-gray-400 text-sm leading-relaxed p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
          {description}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-[#080808]/90">
      <SectionTitle subtitle="ENGINEERING_JOURNEY">Experience & Education</SectionTitle>

      <div className="max-w-4xl mx-auto">
        <FadeIn delay={200}>
          <TimelineItem
            date="Feb 2023 – Present"
            title="Junior Software Developer"
            company="Libex"
            description={
              <ul className="space-y-3 font-light">
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">01.</span> Build and maintain web apps using React.js and vanilla JavaScript — mostly customer-facing interfaces.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">02.</span> Work in a small cross-functional team using Agile; pick up tickets, join standups, do code reviews.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">03.</span> Introduced Docker to the workflow to sort out the 'works on my machine' problem.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">04.</span> Debug and fix front-end issues as they come up, gaining deep technical insights.</li>
              </ul>
            }
          />
        </FadeIn>

        <FadeIn delay={300}>
          <TimelineItem
            date="Feb 2023 – Present"
            title="Front-End Developer (Contract)"
            company="Beyond Horizons Studios"
            description={
              <ul className="space-y-3 font-light">
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">01.</span> Designed and developed the full BHS website from scratch using WordPress.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">02.</span> Worked directly with stakeholders to turn design specs into a working product.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">03.</span> Kept the site performant and responsive across browsers and screen sizes.</li>
              </ul>
            }
          />
        </FadeIn>

        <FadeIn delay={400}>
          <TimelineItem
            date="2022"
            title="PHP & Yii Framework Training"
            company="Zilo Group"
            description={
              <ul className="space-y-3 font-light">
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">01.</span> Completed hands-on training in PHP and the Yii framework.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">02.</span> Focused on writing maintainable code and debugging effectively using MVC patterns.</li>
              </ul>
            }
          />
        </FadeIn>

        <FadeIn delay={500}>
          <TimelineItem
            date="Feb 2020 – Dec 2022"
            title="Diploma in Information Technology"
            company="Rosebank College"
            description={
              <ul className="space-y-3 font-light">
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">01.</span> Focused on software development with modules covering databases, mobile development, and cloud.</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-mono">02.</span> Worked with PL/SQL for database projects and Google Cloud/Firebase for cloud-based assignments.</li>
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
