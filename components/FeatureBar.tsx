"use client";

import { motion } from "framer-motion";
import { FaRobot, FaArrowPointer, FaBan, FaArrowRightArrowLeft, FaSun, FaMobileScreen } from "react-icons/fa6";

export default function FeatureBar() {
  return (
    <section className="px-6 md:px-10 lg:px-24 pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto bg-card border border-border rounded-[32px] p-8 shadow-sm overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Interactive Robots", desc: "Each robot has its own personality.", icon: FaRobot },
            { title: "Cursor Follower", desc: "Curio follows your cursor smartly.", icon: FaArrowPointer },
            { title: "Obstacle Aware", desc: "They avoid content like a real world.", icon: FaBan },
            { title: "Scroll Journey", desc: "Explore sections in a smooth experience.", icon: FaArrowRightArrowLeft },
            { title: "Light & Playful", desc: "A fun and lively portfolio experience.", icon: FaSun },
            { title: "Fully Responsive", desc: "Perfect on all devices mobile, tablet, desktop.", icon: FaMobileScreen },
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-foreground/70" />
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
