"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

// --- Typewriter Effect Component ---
const typewriterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function TypewriterText({ text, className = "" }: { text: string, className?: string }) {
  return (
    <motion.span variants={typewriterVariants} initial="hidden" whileInView="visible" className={className}>
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const journey = [...portfolioData.experience].reverse(); // Oldest first

  // --- Dynamic Road Calculation ---
  const spacing = 80; // 80vw between items
  const startX = 20;  // Start node at 20vw

  const nodes: any[] = [];

  let currentX = startX + spacing; 
  let currentY = 600;

  journey.forEach((exp, idx) => {
    nodes.push({ type: 'exp', xPos: currentX, yPos: currentY, data: exp, idx });
    currentX += spacing;
    currentY = currentY === 600 ? 200 : 600; // alternate bottom/top
  });

  const totalWidthVw = currentX + 60; // extra padding at the end

  // Generate SVG Path
  let d = `M -100 400 L 400 400 `; // Start line

  // To first exp
  d += `C 700 400, 700 ${nodes[0].yPos}, ${nodes[0].xPos * 10} ${nodes[0].yPos} `;

  // Between experiences
  for (let i = 0; i < journey.length - 1; i++) {
    const x1 = nodes[i].xPos * 10;
    const y1 = nodes[i].yPos; 
    const x2 = nodes[i+1].xPos * 10;
    const y2 = nodes[i+1].yPos;
    
    const midX = (x1 + x2) / 2;
    d += `C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2} `;
  }

  // To end line
  const lastExpX = nodes[journey.length - 1].xPos * 10;
  const lastExpY = nodes[journey.length - 1].yPos;
  const endNodeX = currentX * 10;
  d += `C ${(lastExpX + endNodeX)/2} ${lastExpY}, ${(lastExpX + endNodeX)/2} 400, ${endNodeX} 400 `;

  // Finish line
  d += `L ${(currentX + 100) * 10} 400`;

  // --- Scroll Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const maxTranslateX = `-${totalWidthVw - 100}vw`;
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", maxTranslateX]);

  return (
    <section id="experience" className="w-full relative bg-[#F5F5F3] dark:bg-background pt-32 transition-colors duration-300">
      
      <div className="w-full text-center px-6 mb-12">
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
          The Journey
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
          Road to Present
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Scroll to walk through the timeline of my professional career, technical achievements, and continuous learning.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} style={{ height: `${totalWidthVw}vh` }} className="relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#F5F5F3] dark:bg-background transition-colors duration-300">
          
          <motion.div 
            style={{ x, width: `${totalWidthVw}vw` }} 
            className="relative h-[800px] flex items-center shrink-0"
          >
            {/* Infographic Winding Road SVG */}
            <div className="absolute left-0 h-[800px] w-full pointer-events-none flex items-center overflow-hidden">
              <svg 
                width="100%" 
                height="100%" 
                viewBox={`0 0 ${totalWidthVw * 10} 800`} 
                preserveAspectRatio="none" 
              >
                {/* Thick road surface */}
                <path 
                  d={d}
                  className="stroke-[#222222] dark:stroke-white/10 transition-colors duration-300"
                  strokeWidth="100" 
                  fill="none" 
                  strokeLinecap="round" 
                  style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}
                />
                {/* White dashed centerline */}
                <path 
                  d={d}
                  className="stroke-white dark:stroke-white/50 transition-colors duration-300"
                  strokeWidth="6" 
                  strokeDasharray="30 40" 
                  fill="none" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* Nodes and Cards */}
            {nodes.map((node, i) => {
              const isAbove = node.yPos > 400; // If road is at 600, card goes ABOVE the road
              const cardOffset = 100; // 100px gap between road and card

              return (
                <div 
                  key={i}
                  className="absolute z-20 flex flex-col items-center"
                  style={{ 
                    left: `${node.xPos}vw`,
                    transform: 'translateX(-50%)',
                    top: !isAbove ? `${node.yPos + cardOffset}px` : 'auto',
                    bottom: isAbove ? `${800 - node.yPos + cardOffset}px` : 'auto'
                  }}
                >
                  {/* Card Content */}
                  <ExperienceCard data={node.data} />

                  {/* Heavy Connector Line */}
                  <div 
                    className={`absolute z-10 left-1/2 -translate-x-1/2`} 
                    style={{ height: `${cardOffset}px`, [isAbove ? 'bottom' : 'top']: `-${cardOffset}px` }}
                  >
                    <motion.div 
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ originY: isAbove ? 1 : 0 }} 
                      className="w-[4px] md:w-[6px] h-full rounded-full bg-foreground/30 dark:bg-foreground/50"
                    />
                  </div>

                  {/* Road Dot */}
                  <div 
                    className={`absolute z-20 left-1/2`} 
                    style={{ [isAbove ? 'bottom' : 'top']: `-${cardOffset}px`, transform: `translateY(${isAbove ? '50%' : '-50%'}) translateX(-50%)` }}
                  >
                     <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       transition={{ duration: 0.4, delay: 0.1 }}
                       className="w-6 h-6 rounded-full bg-[#222222] dark:bg-white border-4 border-white dark:border-zinc-900 shadow-lg"
                     />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Card Components ---

function ExperienceCard({ data }: { data: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "0px -100px" }}
      transition={{ duration: 0.6 }}
      className="w-[320px] md:w-[400px] text-left transition-colors duration-300"
    >
      <div className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-widest">
        <TypewriterText text={data.period} />
      </div>
      <h3 className="text-2xl md:text-3xl font-black mb-1 text-foreground leading-tight">
        <TypewriterText text={data.title} />
      </h3>
      <div className="text-primary font-bold text-lg mb-4">
        <TypewriterText text={data.company} />
      </div>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ margin: "0px -100px" }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 font-medium"
      >
        {data.description}
      </motion.p>
      
      {/* Technology Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "0px -100px" }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap gap-2"
      >
        {data.achievements?.slice(0, 3).map((ach: string, i: number) => {
          const tagLabel = ach.split(':')[0]; 
          if (!tagLabel || tagLabel.length > 25) return null; 
          return (
            <span key={i} className="text-[10px] sm:text-xs font-bold bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full text-foreground/80 transition-colors uppercase tracking-wider">
              {tagLabel}
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
