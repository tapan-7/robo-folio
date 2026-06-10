"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLocationDot, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-24 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side - Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[40%] flex flex-col relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-muted mb-8 border border-border shadow-sm grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group">
            <Image 
              src="https://placehold.co/800x1000/111111/525252.png?text=Your+Portrait" 
              alt="Tapan Kumar Swain" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          <div className="flex flex-col gap-4 text-sm font-medium text-foreground">
            <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                <FaLocationDot className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">Location</span>
                <span>{portfolioData.experience[0].location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">Current Role</span>
                <span>{portfolioData.profile.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">Education</span>
                <span>{portfolioData.education[0].degree.split(" ")[0]} / {portfolioData.education[0].institution.split(" ")[0]}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Storytelling */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] flex flex-col relative"
        >
          {/* Subtle Curio Robot Floating */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -top-12 w-24 h-24 hidden md:block opacity-80"
          >
            <Image src="/images/curio_explorer.png" alt="Curio Looking" fill sizes="96px" className="object-contain" />
          </motion.div>

          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Who I Am</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-16">
            <p className="mb-6">{portfolioData.profile.summary}</p>
          </div>

          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaCode className="w-6 h-6 text-muted-foreground" />
            My Journey
          </h3>

          <div className="flex flex-col gap-8 relative border-l-2 border-border pl-8 ml-4">
            {[...portfolioData.experience].reverse().map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-foreground" />
                <span className="text-sm font-bold text-foreground bg-foreground/10 px-3 py-1 rounded-full mb-3 inline-block">
                  {exp.period.split(" ")[0]} {exp.period.split(" ")[exp.period.split(" ").length - 1]}
                </span>
                <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
