
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={cn(
        "py-32 first:pt-24 last:pb-24 overflow-hidden",
        className
      )}
    >
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
