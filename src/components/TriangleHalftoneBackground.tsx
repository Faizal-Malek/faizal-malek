import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

type TriangleMark = {
  id: number;
  x: number;
  y: number;
  size: number;
  tone: number;
  opacity: number;
  direction: "left" | "right";
  angle: number;
  mobileHidden: boolean;
};

const CENTER_X = 54;
const CENTER_Y = 49;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const gaussian = (
  x: number,
  y: number,
  gx: number,
  gy: number,
  sx: number,
  sy: number,
) => Math.exp(-(((x - gx) / sx) ** 2 + ((y - gy) / sy) ** 2) / 2);

const seededNoise = (x: number, y: number, salt = 0) => {
  const value = Math.sin(x * 12.9898 + y * 78.233 + salt * 37.719) * 43758.5453;
  return value - Math.floor(value);
};

const diagonalBand = (x: number, y: number) => {
  const x1 = -6;
  const y1 = 82;
  const x2 = 93;
  const y2 = 50;
  const vx = x2 - x1;
  const vy = y2 - y1;
  const wx = x - x1;
  const wy = y - y1;
  const t = clamp((wx * vx + wy * vy) / (vx * vx + vy * vy), 0, 1);
  const px = x1 + t * vx;
  const py = y1 + t * vy;
  return Math.exp(-((Math.hypot(x - px, y - py) / 13.5) ** 2));
};

const buildTriangleMarks = (): TriangleMark[] => {
  const marks: TriangleMark[] = [];
  let id = 0;

  for (let y = -2; y <= 102; y += 4.15) {
    const row = Math.round((y + 2) / 4.15);
    const offset = row % 2 === 0 ? 0 : 2.65;

    for (let x = -2 + offset; x <= 102; x += 5.3) {
      const jitterX = (seededNoise(x, y, 1) - 0.5) * 1.4;
      const jitterY = (seededNoise(x, y, 2) - 0.5) * 1.1;
      const px = x + jitterX;
      const py = y + jitterY;
      const centerDistance = Math.hypot(px - CENTER_X, py - CENTER_Y);
      const centerFade = smoothstep(14, 49, centerDistance);
      const edgeDistance = Math.min(px, py, 100 - px, 100 - py);
      const edgeIntensity = clamp((34 - edgeDistance) / 34, 0, 1) ** 1.22;

      const intensity =
        Math.max(
          edgeIntensity,
          gaussian(px, py, 18, 72, 18, 17) * 0.82,
          diagonalBand(px, py) * gaussian(px, py, 45, 64, 42, 20) * 0.74,
          gaussian(px, py, 94, 52, 8, 29) * 0.68,
          gaussian(px, py, 31, 3, 38, 8) * 0.68,
          gaussian(px, py, 66, 98, 42, 8) * 0.76,
        ) *
        (0.22 + centerFade * 0.78);

      if (intensity < 0.055) {
        continue;
      }

      const density = clamp(0.08 + intensity * 0.86, 0, 0.94);
      if (seededNoise(px, py, 3) > density) {
        continue;
      }

      const size = 4.5 + intensity * 33 + seededNoise(px, py, 4) * 7;
      const direction = (row + Math.round(x / 5.3)) % 2 === 0 ? "left" : "right";
      const angle = (seededNoise(px, py, 5) - 0.5) * 8;
      const tone = Math.round(clamp(230 - intensity * 105, 118, 226));

      marks.push({
        id: id++,
        x: clamp(px, -1.5, 101.5),
        y: clamp(py, -1.5, 101.5),
        size,
        tone,
        opacity: clamp(0.06 + intensity * 0.48, 0.06, 0.54),
        direction,
        angle,
        mobileHidden: intensity < 0.34,
      });
    }
  }

  return marks;
};

const baseColor = (mark: TriangleMark) =>
  `rgba(${mark.tone}, ${mark.tone}, ${mark.tone}, ${mark.opacity})`;

const baseTransform = (mark: TriangleMark) =>
  `translate(-50%, -50%) rotate(${mark.angle}deg)`;

const TriangleHalftoneBackground: React.FC = () => {
  const marks = useMemo(buildTriangleMarks, []);
  const pieceRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resetPiece = (piece: HTMLDivElement, mark: TriangleMark) => {
      piece.style.backgroundColor = baseColor(mark);
      piece.style.boxShadow = "none";
      piece.style.opacity = String(mark.opacity);
      piece.style.filter = "none";
      piece.style.transform = baseTransform(mark);
    };

    const updatePieces = () => {
      frame = 0;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const reach = Math.max(86, Math.min(width, height) * 0.13);

      marks.forEach((mark, index) => {
        const piece = pieceRefs.current[index];
        if (!piece) {
          return;
        }

        const x = (mark.x / 100) * width;
        const y = (mark.y / 100) * height;
        const distance = Math.hypot(mouseX - x, mouseY - y);
        const strength = clamp(1 - distance / reach, 0, 1);

        if (strength <= 0.02) {
          resetPiece(piece, mark);
          return;
        }

        const alpha = clamp(mark.opacity + strength * 0.42, 0.16, 0.86);
        const scale = reducedMotion ? 1 : 1 + strength * 0.42;
        const rotate = mark.angle + (mark.direction === "left" ? -1 : 1) * strength * 10;

        piece.style.backgroundColor = `rgba(16, 185, 129, ${alpha})`;
        piece.style.opacity = String(clamp(mark.opacity + strength * 0.35, 0.14, 0.92));
        piece.style.boxShadow = `0 0 ${Math.round(10 + strength * 26)}px rgba(16, 185, 129, ${0.08 + strength * 0.32})`;
        piece.style.filter = `saturate(${1 + strength * 0.7})`;
        piece.style.transform = `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`;
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(updatePieces);
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;

      if (!frame) {
        frame = window.requestAnimationFrame(updatePieces);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [marks]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_49%,rgba(255,255,255,0.025),transparent_42%)]" />
      {marks.map((mark, index) => (
        <div
          key={mark.id}
          ref={(piece) => {
            pieceRefs.current[index] = piece;
          }}
          className={cn(
            "triangle-halftone-piece",
            mark.direction === "left" ? "clip-triangle-left" : "clip-triangle-right",
            mark.mobileHidden && "hidden sm:block",
          )}
          style={{
            left: `${mark.x}%`,
            top: `${mark.y}%`,
            width: `clamp(${Math.round(mark.size * 0.62)}px, ${(mark.size / 10).toFixed(2)}vmin, ${Math.round(mark.size * 1.52)}px)`,
            backgroundColor: baseColor(mark),
            opacity: mark.opacity,
            transform: baseTransform(mark),
          }}
        />
      ))}
    </div>
  );
};

export default TriangleHalftoneBackground;
