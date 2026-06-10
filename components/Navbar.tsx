"use client";

import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
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
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className="hover:text-foreground transition-colors">
            Resume
          </a>
        </li>
        <li>
          <a href="#blog" className="hover:text-foreground transition-colors">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-foreground transition-colors">
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
  );
}
