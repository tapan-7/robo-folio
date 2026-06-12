"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
  }

  update(width: number, height: number, mouseX: number, mouseY: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Mouse interaction - slightly move away from mouse and get brighter
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      const angle = Math.atan2(dy, dx);
      const force = (150 - distance) / 150;
      this.x -= Math.cos(angle) * force * 1;
      this.y -= Math.sin(angle) * force * 1;
      this.alpha = Math.min(this.alpha + 0.05, 1);
    } else {
      this.alpha = Math.max(this.alpha - 0.01, 0.2);
    }

    // Wrap around
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = isDark
      ? `rgba(255, 120, 50, ${this.alpha})`
      : `rgba(0, 0, 0, ${this.alpha * 0.5})`;
    ctx.fill();
  }
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark if theme is undefined/system initially to avoid flash
  const isDark = mounted ? theme !== "light" : true;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = -1000;
    let mouseY = -1000;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      const particleCount = width > 768 ? 150 : 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update(width, height, mouseX, mouseY);
        p.draw(ctx, isDark);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Blurred Orbs */}
      <div
        className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? "opacity-20 bg-orange-600" : "opacity-[0.03] bg-black"}`}
      />
      <div
        className={`absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? "opacity-10 bg-red-600" : "opacity-[0.02] bg-black"}`}
      />
      <div
        className={`absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? "opacity-15 bg-amber-600" : "opacity-[0.02] bg-black"}`}
      />

      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Data Traces (Vertical lines shooting down) */}
      <motion.div
        animate={{ y: ["-100vh", "150vh"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        className={`absolute left-[15%] w-[1px] h-32 ${isDark ? "bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" : "bg-gradient-to-b from-transparent via-black/10 to-transparent"}`}
      />
      <motion.div
        animate={{ y: ["-100vh", "150vh"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 0 }}
        className={`absolute left-[70%] w-[1px] h-64 ${isDark ? "bg-gradient-to-b from-transparent via-red-500/30 to-transparent" : "bg-gradient-to-b from-transparent via-black/5 to-transparent"}`}
      />

      {/* Data Trace (Horizontal line shooting right) */}
      <motion.div
        animate={{ x: ["-100vw", "150vw"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className={`absolute top-[30%] h-[1px] w-64 ${isDark ? "bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" : "bg-gradient-to-r from-transparent via-black/5 to-transparent"}`}
      />
    </div>
  );
}
