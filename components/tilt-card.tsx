"use client";

import type React from "react";
import { useState, useRef, type ReactNode } from "react";
import * as motion from "motion/react-client";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation based on mouse position
    // Divide by a larger number for subtler effect
    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setScale(1.03);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
