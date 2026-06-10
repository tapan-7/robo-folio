"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PreviewCards() {
  return (
    <section className="px-6 md:px-10 lg:px-24 py-20 bg-background relative z-10 w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-[1600px] mx-auto">
        {[
          {
            id: "01",
            title: "About Me",
            desc: "Hi, I'm Tapan. A passionate developer who loves building things for the web.",
            image: "/images/about_me.png",
            button: "Know more",
          },
          {
            id: "02",
            title: "Skills",
            desc: "",
            image: "/images/skill.png",
            button: "",
          },
          {
            id: "03",
            title: "Projects",
            desc: "",
            image: "/images/project.png",
            button: "Explore",
          },
          {
            id: "04",
            title: "Resume",
            desc: "My Resume. Download or view my resume in one click.",
            image: "/images/resume.png",
            button: "Download",
          },
          {
            id: "05",
            title: "Blog",
            desc: "Latest Articles. Thoughts, tutorials and things I learn.",
            image: "/images/blog.png",
            button: "Read Blog",
          },
          {
            id: "06",
            title: "Contact",
            desc: "Let's build something amazing together.",
            image: "/images/contact.png",
            button: "Get in Touch",
          },
        ].map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card border border-border rounded-[24px] p-5 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col min-h-[300px] xl:min-h-[340px]"
          >
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <div>
                <span className="text-foreground font-bold text-sm mb-1 block">
                  {card.id}
                </span>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                {card.desc && (
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[70%]">
                    {card.desc}
                  </p>
                )}
              </div>
              
              {card.button && (
                <div className="mt-auto pointer-events-auto">
                  <button className="text-xs font-semibold bg-secondary/80 text-secondary-foreground border border-border px-4 py-2 rounded-full hover:bg-secondary transition-colors">
                    {card.button}
                  </button>
                </div>
              )}
            </div>
            
            <div className="absolute right-[-10px] bottom-0 w-[140px] h-[140px] xl:w-[170px] xl:h-[170px] pointer-events-none">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1280px) 140px, 170px"
                className="object-contain object-bottom drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
