"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = portfolioData.experience;

  return (
    <section ref={containerRef} className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-32 relative overflow-hidden">
      <div className="text-center mb-20">
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">Experience</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Professional Journey</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Vertical Line */}
        <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-1 bg-border rounded-full" />
        <motion.div 
          className="absolute left-4 md:left-[50%] top-0 bottom-0 w-1 bg-foreground rounded-full origin-top"
          style={{ scaleY }}
        />

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[14px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-foreground z-10 shadow-sm" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="text-4xl font-extrabold text-foreground/10 group-hover:text-foreground/20 transition-colors absolute top-4 right-8 md:right-auto md:left-8 pointer-events-none whitespace-nowrap">
                      {exp.period.split(" ")[0]} {exp.period.split(" ")[exp.period.split(" ").length - 1]}
                    </span>
                    <h3 className="text-xl font-bold mb-2 relative z-10">{exp.title}</h3>
                    <span className="text-sm font-bold text-foreground bg-foreground/10 px-3 py-1 rounded-full mb-4 inline-block relative z-10">{exp.company}</span>
                    <p className="text-muted-foreground leading-relaxed relative z-10 mb-4">{exp.description}</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2 relative z-10">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li key={aIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
