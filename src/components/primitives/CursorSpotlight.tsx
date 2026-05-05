"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface CursorSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

export function CursorSpotlight({
  className,
  size = 360,
  color = "rgba(183, 190, 255, 0.18)",
  children,
  ...props
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHover, setIsHover] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(finePointer.matches && !reduce.matches);
    update();
    reduce.addEventListener("change", update);
    finePointer.addEventListener("change", update);
    return () => {
      reduce.removeEventListener("change", update);
      finePointer.removeEventListener("change", update);
    };
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => enabled && setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn("relative", className)}
      {...props}
    >
      {enabled && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 60%)`,
            opacity: isHover ? 1 : 0,
          }}
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
