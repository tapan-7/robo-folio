"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Transition() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full h-px bg-border mb-16 relative">
        <div className="absolute left-[10%] lg:left-[25%] -top-16 w-24 h-24 z-10 hidden md:block">
           <Image src="/images/curio_explorer.png" alt="Curio Sitting" fill sizes="96px" className="object-contain" />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Human Behind The Robots</h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          A developer who loves creating<br className="hidden md:block" /> beautiful digital experiences.
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium text-muted-foreground block">
            ↓ Scroll to discover my journey
          </span>
        </motion.div>
      </motion.div>
      
      <div className="w-full h-px bg-border mt-16" />
    </section>
  );
}
