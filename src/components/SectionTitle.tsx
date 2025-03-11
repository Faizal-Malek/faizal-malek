
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {subtitle && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
    </div>
  );
};

export default SectionTitle;
