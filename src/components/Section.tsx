
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={cn("py-8 md:py-12 w-full overflow-hidden bg-pint", className)}
    >
      <div className="section-container">{children}</div>
    </section>
  );
};

export default Section;
