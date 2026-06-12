"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { portfolioData } from "@/data/portfolio";
export default function Skills() {
  const skillCategories = Object.entries(portfolioData.skills).map(([title, skills]) => ({
    title,
    skills,
  }));

  return (
    <section id="skills" className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-24 relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative">
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">Professional Dashboard</h2>
        

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-card/50 backdrop-blur-xl border border-border rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Glossy reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
            
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, sIdx) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground transition-colors" />
                  <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
