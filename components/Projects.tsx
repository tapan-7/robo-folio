"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="w-full bg-background relative overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 relative">
        <div className="text-center mb-24">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Main Attraction</h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={project.title} className="relative">
                {/* Pix Robot Presenting (Only between projects) */}
                {idx > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`absolute -top-24 w-24 h-24 z-20 hidden lg:block ${isEven ? 'right-[10%]' : 'left-[10%]'}`}
                  >
                    <Image src="/images/pix_designer.png" alt="Pix Presenting" fill sizes="96px" className="object-contain drop-shadow-xl" />
                  </motion.div>
                )}

                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[32px] overflow-hidden bg-muted border border-border shadow-2xl group"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>

                  {/* Details Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col"
                  >
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">{project.title}</h3>
                    <div className="space-y-6 mb-10 text-muted-foreground leading-relaxed">
                      <p>{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-2 bg-muted text-muted-foreground font-semibold text-sm rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-[20px] font-semibold hover:opacity-90 transition-opacity">
                        <FaArrowUpRightFromSquare className="w-5 h-5" /> Live Demo
                      </button>
                      <button className="flex items-center gap-2 text-foreground font-semibold hover:text-muted-foreground transition-colors">
                        <FaGithub className="w-5 h-5" /> Source Code
                      </button>
                    </div>
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
