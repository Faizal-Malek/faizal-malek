
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
    <div className={cn("mb-20 text-center", className)}>
      {subtitle && (
        <div className="relative inline-block mb-4">
          <div className="relative px-4 py-1 text-[10px] font-mono tracking-[0.3em] text-emerald-400 bg-emerald-500/5 border border-emerald-500/30 rounded-md uppercase">
            {`> ${subtitle}`}
          </div>
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">{children}</h2>
      <div className="w-20 h-[2px] bg-emerald-500 mx-auto mt-6 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
    </div>
  );
};

export default SectionTitle;
