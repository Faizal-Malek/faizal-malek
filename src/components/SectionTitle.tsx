
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
    <div className={cn("mb-24 text-center", className)}>
      {subtitle && (
        <div className="relative inline-block">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur"></div>
          <div className="relative px-4 py-2 text-sm font-medium tracking-wider text-primary bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 shadow-lg transform hover:scale-105 transition-all duration-300">
            {subtitle}
          </div>
        </div>
      )}
      <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{children}</h2>
    </div>
  );
};

export default SectionTitle;
