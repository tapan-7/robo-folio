"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaCircleCheck } from "react-icons/fa6";

export default function Resume() {
  const highlights = [
    "3+ Years of Professional Experience",
    "Expertise in React, Next.js, and TypeScript",
    "Backend systems with NestJS and PostgreSQL",
    "Real-time applications and WebSocket integrations",
    "Master of Computer Applications (MCA)",
  ];

  return (
    <section id="resume" className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-32 relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side - Resume Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >


          <div className="bg-card border border-border rounded-[32px] p-8 shadow-xl relative overflow-hidden group">
            {/* Gloss */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Fake PDF Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-400" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-green-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground font-mono">tapan_swain_resume.pdf</span>
            </div>

            {/* Fake Content Lines */}
            <div className="space-y-6 opacity-30 mb-12">
              <div className="h-4 bg-foreground w-1/3 rounded-full" />
              <div className="h-2 bg-foreground w-3/4 rounded-full" />
              <div className="h-2 bg-foreground w-5/6 rounded-full" />
              <div className="h-2 bg-foreground w-2/3 rounded-full" />
              <div className="pt-4 space-y-3">
                <div className="h-3 bg-foreground w-1/4 rounded-full mb-2" />
                <div className="h-2 bg-foreground w-full rounded-full" />
                <div className="h-2 bg-foreground w-full rounded-full" />
                <div className="h-2 bg-foreground w-4/5 rounded-full" />
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity">
              <FaDownload className="w-6 h-6" /> Download Full PDF
            </button>
          </div>
        </motion.div>

        {/* Right Side - Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">Archive</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Executive Summary</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A quick overview of my professional qualifications, core competencies, and educational background.
          </p>

          <div className="flex flex-col gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <FaCircleCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-lg font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
