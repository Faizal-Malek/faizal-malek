
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveGridProps {
  position: 'top-right' | 'bottom-left';
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ position }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect multiplier
  const offset = scrollY * 0.1;

  return (
    <div 
      className={cn(
        "fixed pointer-events-none z-0 perspective-1000 hidden lg:block",
        position === 'top-right' ? "top-[-10%] right-[-5%]" : "bottom-[-10%] left-[-5%]"
      )}
      style={{
        transform: `translateY(${position === 'top-right' ? -offset : offset}px)`
      }}
    >
      <div className="grid grid-cols-12 gap-3 p-20 opacity-30">
        {Array.from({ length: 144 }).map((_, i) => (
          <div 
            key={i}
            className="w-10 h-10 relative preserve-3d transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-y-180 pointer-events-auto group cursor-none"
          >
            {/* Front Side */}
            <div className={cn(
              "absolute inset-0 bg-emerald-500/5 border border-emerald-500/10 backface-hidden transition-all duration-700 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/30",
              i % 2 === 0 ? "clip-triangle" : "clip-triangle-alt"
            )} />
            
            {/* Back Side (Flipped) */}
            <div className={cn(
              "absolute inset-0 bg-emerald-900/10 border border-emerald-400/20 [transform:rotateY(180deg)] backface-hidden shadow-[0_0_15px_rgba(16,185,129,0.1)]",
              i % 2 === 0 ? "clip-triangle" : "clip-triangle-alt"
            )} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;
