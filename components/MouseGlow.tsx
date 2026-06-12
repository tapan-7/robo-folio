"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useTheme } from "next-themes";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a premium, delayed tracking effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    
    // Default to center of screen until mouse moves
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Adjust the glow color based on the theme
  const gradientColor = theme === "dark" 
    ? "rgba(255, 90, 0, 0.15)" // Warm orange spotlight for dark mode
    : "rgba(0, 0, 0, 0.05)"; // Subtle black spotlight for light mode

  const background = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, ${gradientColor}, transparent 350px)`;

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500 mix-blend-screen"
      style={{ background }}
    />
  );
}
