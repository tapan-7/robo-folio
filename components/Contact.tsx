"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const robots = [
    "/images/curio_explorer.png",
    "/images/bolt_engineer.png",
    "/images/pix_artist.png",
    "/images/doc_builder.png",
    "/images/byte_researcher.png",
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 py-32 relative overflow-hidden text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6 block">
          Final Scene
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Let's Build Something Together
        </h2>
        <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
          Have an idea,
          <br />a project,
          <br />
          or just want to say hello?
        </p>

        <button className="bg-foreground text-background px-12 py-5 rounded-full font-bold text-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl mb-24">
          Send Message
        </button>

        <div className="flex items-center justify-center gap-8 mb-24">
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-card border border-border rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-card border border-border rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="p-4 bg-card border border-border rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href={portfolioData.profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-card border border-border rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* The Crew Celebrating */}
      <div className="relative w-full h-[200px] md:h-[300px] max-w-4xl mx-auto flex items-end justify-center gap-4 md:gap-8 overflow-hidden">
        {robots.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: idx * 0.1,
            }}
            className="relative w-[15%] aspect-square"
          >
            <Image
              src={src}
              alt="Crew Robot"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
