"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 300vh for a comfortable scroll time
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track is 200vw wide. Translate by -50% to shift by exactly -100vw, leaving the last 100vw on screen
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Reverse so we scroll from oldest to newest
  const journey = [...portfolioData.experience].reverse();

  return (
    <section id="experience" className="w-full relative bg-background pt-32">
      
      <div className="w-full text-center px-6 mb-12">
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
          The Journey
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Road to Present
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Scroll to walk through the timeline of my professional career, technical achievements, and continuous learning.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="h-[300vh] relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-background">
          
          <motion.div 
            style={{ x }} 
            className="relative h-full flex items-center w-[200vw]"
          >
            {/* Infographic Winding Road SVG */}
            <div className="absolute left-0 h-[600px] w-[200vw] pointer-events-none flex items-center overflow-hidden">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 2000 600" 
                preserveAspectRatio="none" 
              >
                {/* 
                  Steep winding road. 
                  1vw = 10 units. 
                  Item 0 at 30vw (300)
                  Item 1 at 80vw (800)
                  Item 2 at 130vw (1300)
                */}
                <path 
                  d="M -100 300 
                     C 100 300, 150 100, 300 100 
                     C 450 100, 650 500, 800 500 
                     C 950 500, 1150 100, 1300 100 
                     C 1450 100, 1650 500, 1800 500 
                     C 1950 500, 2050 300, 2200 300" 
                  stroke="currentColor" 
                  className="text-foreground opacity-20"
                  strokeWidth="120" 
                  fill="none" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M -100 300 
                     C 100 300, 150 100, 300 100 
                     C 450 100, 650 500, 800 500 
                     C 950 500, 1150 100, 1300 100 
                     C 1450 100, 1650 500, 1800 500 
                     C 1950 500, 2050 300, 2200 300" 
                  stroke="currentColor" 
                  className="text-background"
                  strokeWidth="8" 
                  strokeDasharray="30 40" 
                  fill="none" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* Experience Items */}
            {journey.map((exp, idx) => (
              <ExperienceItem 
                key={idx} 
                exp={exp} 
                idx={idx} 
                total={journey.length} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual timeline items
function ExperienceItem({ exp, idx, total }: { exp: any, idx: number, total: number }) {
  const isAbove = idx % 2 !== 0; // Odd index = Trough (Text high)
  
  // Place items at 30vw, 80vw, 130vw...
  const leftPosition = 30 + (idx * 50);

  return (
    <div 
      className="absolute flex flex-col z-20"
      style={{ 
        left: `${leftPosition}vw`,
        top: isAbove ? '10%' : 'auto',
        bottom: isAbove ? 'auto' : '10%',
        width: '45vw',
        maxWidth: '450px',
        transform: 'translateX(-50%)'
      }}
    >
      {/* Stick connecting to road */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 w-1 bg-border/50 shadow-[0_0_15px_currentColor] 
          ${isAbove ? '-bottom-[25vh] h-[25vh]' : '-top-[25vh] h-[25vh]'}
        `} 
      />

      {/* Milestone Node */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e6d5c3] dark:bg-[#3a3028] flex items-center justify-center border-[6px] border-background shadow-xl z-30 text-2xl md:text-3xl
          ${isAbove ? '-bottom-[25vh] translate-y-1/2' : '-top-[25vh] -translate-y-1/2'}
        `} 
      >
        {['💼', '🔊', '👍', '🎨', '🔄'][idx % 5]}
      </div>

      {/* Typography Content */}
      <div className="flex flex-col items-center text-center px-4 bg-background/50 backdrop-blur-sm rounded-2xl py-4 border border-foreground/5">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
          {exp.title}
        </h3>
        <span className="text-xs font-bold text-primary mb-3">
          {exp.period}
        </span>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {exp.description}
        </p>
      </div>

      {/* Robot Decoration */}
      {idx === 0 && (
         <div className={`absolute -right-24 ${isAbove ? '-top-10' : '-bottom-10'} w-32 h-32 pointer-events-none hidden lg:block opacity-60`}>
            <Image src="/images/curio_explorer.png" alt="Curio" fill sizes="128px" className="object-contain" />
         </div>
      )}
      {idx === total - 1 && (
         <div className={`absolute -left-24 ${isAbove ? '-top-10' : '-bottom-10'} w-32 h-32 pointer-events-none hidden lg:block opacity-60`}>
            <Image src="/images/pix_designer.png" alt="Pix" fill sizes="128px" className="object-contain" />
         </div>
      )}
    </div>
  );
}
