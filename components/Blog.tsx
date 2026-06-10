"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Blog() {
  const posts = [
    {
      title: "How I built an AI synchronization system",
      readTime: "5 min read",
      category: "AI",
      image: "https://placehold.co/800x600/111111/525252.png?text=AI+System",
    },
    {
      title: "Optimizing React Native Video Calling",
      readTime: "8 min read",
      category: "Mobile",
      image: "https://placehold.co/800x600/111111/525252.png?text=React+Native",
    },
    {
      title: "Architecting a Scalable Next.js Platform",
      readTime: "6 min read",
      category: "Architecture",
      image: "https://placehold.co/800x600/111111/525252.png?text=Next.js",
    }
  ];

  return (
    <section id="blog" className="w-full bg-card/30 relative overflow-hidden py-32 border-y border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">Library</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Posts</h2>
          </div>
          
          {/* Byte Robot Reading */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block w-20 h-20 relative"
          >
            <Image src="/images/byte_researcher.png" alt="Byte Reading" fill sizes="80px" className="object-contain" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-muted-foreground font-medium">{post.readTime}</span>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
