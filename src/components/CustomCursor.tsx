import React, { useEffect, useState, useRef } from "react";

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const outerPosition = useRef({ x: 0, y: 0 });
  const innerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth cursor follow with different easing for outer and inner
      const outerEase = 0.15;
      const innerEase = 0.25;
      
      outerPosition.current.x += (targetPosition.current.x - outerPosition.current.x) * outerEase;
      outerPosition.current.y += (targetPosition.current.y - outerPosition.current.y) * outerEase;
      
      innerPosition.current.x += (targetPosition.current.x - innerPosition.current.x) * innerEase;
      innerPosition.current.y += (targetPosition.current.y - innerPosition.current.y) * innerEase;
      
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPosition.current.x}px, ${outerPosition.current.y}px) translate(-50%, -50%)`;
      }
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${innerPosition.current.x}px, ${innerPosition.current.y}px) translate(-50%, -50%)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={outerRef}
        className={`custom-cursor-outer ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      
      {/* Inner cursor dot */}
      <div
        ref={innerRef}
        className={`custom-cursor-inner ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
};

export default CustomCursor;