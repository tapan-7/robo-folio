"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MessageCircle,
  MessageCircleCode,
  UserSearch,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 py-6 px-10 flex items-center justify-between backdrop-blur-md bg-background/50 border-b border-border">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-background rounded-full" />
          </div>
          <span className="font-bold text-xl tracking-tight">Tapan.</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <li>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-foreground transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden md:flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-medium hover:bg-background hover:shadow-md transition-all">
            Let's Talk <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Side Navigation Indicator */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 1 ? "bg-foreground" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>

      {/* Right Floating Interaction Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 bg-card px-3 py-6 rounded-[24px] border border-border shadow-sm"
      >
        <span className="text-xs font-medium text-muted-foreground rotate-90 whitespace-nowrap mb-8">
          Scroll ↓
        </span>
        <div className="w-px h-12 bg-border" />
        <span className="text-xs font-medium text-muted-foreground rotate-90 whitespace-nowrap mt-8">
          Interact Cursor
        </span>
      </motion.div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-32 px-10 md:px-24 flex flex-col lg:flex-row items-center">
        {/* Left Content (40%) */}
        <motion.div
          className="w-full lg:w-[40%] flex flex-col z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lg font-medium text-muted-foreground mb-4">
            Hello, I'm
          </span>

          <h1 className="text-6xl md:text-[90px] leading-[0.95] font-extrabold tracking-tight mb-8">
            Tapan Kumar
            <br />
            <span className="hand-drawn-underline">Swain</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-[500px] mb-10 leading-relaxed">
            I build scalable web applications, intuitive user experiences and
            delightful digital products.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-[20px] font-semibold hover:opacity-90 hover:shadow-lg transition-all">
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-[20px] font-semibold hover:bg-background hover:shadow-sm transition-all">
              Download Resume <Download className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <UserSearch className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <MessageCircleCode className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Hero Robot World (60%) */}
        <div className="w-full lg:w-[60%] h-[70vh] lg:h-screen relative mt-16 lg:mt-0 flex items-center justify-center">
          {/* Main Robot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-full min-h-[400px] max-h-[800px] flex items-center justify-center"
          >
            <Image
              src="/images/hero.png"
              alt="Robot World"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Floating Labels (Simulated positioning since we don't have exact coordinates) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute top-[20%] left-[20%] flex flex-col items-center"
          >
            <span className="font-handwriting text-xl text-foreground rotate-[-5deg]">
              Byte
              <br />
              <span className="text-sm">Researcher</span>
            </span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-foreground opacity-60 ml-8 mt-1"
            >
              <path
                d="M5 5 Q 20 30 35 35 M 35 35 L 30 25 M 35 35 L 25 35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute bottom-[20%] right-[20%] flex flex-col items-center"
          >
            <span className="font-handwriting text-xl text-foreground rotate-[5deg]">
              Curio
              <br />
              <span className="text-sm">Explorer</span>
            </span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-foreground opacity-60 mr-8 mb-1 rotate-180"
            >
              <path
                d="M5 5 Q 20 30 35 35 M 35 35 L 30 25 M 35 35 L 25 35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Lower Preview Cards */}
      <section className="px-6 md:px-10 lg:px-24 py-20 bg-background relative z-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-[1800px] mx-auto">
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

      {/* Feature Bar */}
      <section className="px-6 md:px-10 lg:px-24 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1800px] mx-auto bg-card border border-border rounded-[32px] p-8 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {[
              { title: "Interactive Robots", desc: "Each robot has its own personality." },
              { title: "Cursor Follower", desc: "Curio follows your cursor smartly." },
              { title: "Obstacle Aware", desc: "They avoid content like a real world." },
              { title: "Scroll Journey", desc: "Explore sections in a smooth experience." },
              { title: "Light & Playful", desc: "A fun and lively portfolio experience." },
              { title: "Fully Responsive", desc: "Perfect on all devices mobile, tablet, desktop." },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center">
                  <div className="w-5 h-5 bg-foreground/20 rounded-sm"></div>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
