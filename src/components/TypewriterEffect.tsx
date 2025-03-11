
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className,
  speed = 100,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting to type
    timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, speed, text]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      {currentIndex < text.length && (
        <span className="cursor-typewriter ml-[2px]"></span>
      )}
    </div>
  );
};

export default TypewriterEffect;
