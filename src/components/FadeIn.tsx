
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && entry.isIntersecting) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    const baseStyles = {
      opacity: 0,
      transform: "translate(0, 0)",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };

    if (direction === "up") {
      baseStyles.transform = "translateY(20px)";
    } else if (direction === "down") {
      baseStyles.transform = "translateY(-20px)";
    } else if (direction === "left") {
      baseStyles.transform = "translateX(20px)";
    } else if (direction === "right") {
      baseStyles.transform = "translateX(-20px)";
    }

    const visibleStyles = {
      opacity: 1,
      transform: "translate(0, 0)",
    };

    return {
      hidden: baseStyles,
      visible: visibleStyles,
    };
  };

  const { hidden, visible } = getDirectionStyles();
  const style = isVisible ? { ...hidden, ...visible } : hidden;

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
};

export default FadeIn;
