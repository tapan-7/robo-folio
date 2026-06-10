"use client";

import { motion } from "framer-motion";

export default function FeatureBar() {
  return (
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
  );
}
