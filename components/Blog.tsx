"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Blog() {
  const posts = [
    {
      title: "Google Drive Integration: From OAuth Setup to Background Sync",
      readTime: "4 min read",
      category: "Integration",
      image:
        "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkwxy1dnx5wiy8521hs9u.png",
      url: "https://dev.to/tapan-7/google-drive-integration-from-oauth-setup-to-background-sync-251d",
    },
    {
      title: "How to Store VideoSDK Cloud Recordings Securely on AWS S3",
      readTime: "2 min read",
      category: "Cloud Storage",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5pucpeol052cclynfeik.png",
      url: "https://dev.to/tapan-7/how-to-store-videosdk-cloud-recordings-securely-on-aws-s3-g5",
    },
    {
      title: "Integrating Health Connect in Android + React Native Apps",
      readTime: "3 min read",
      category: "Mobile",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg3biexv7pt8weik2xug4.png",
      url: "https://dev.to/tapan-7/integrating-health-connect-in-android-react-native-apps-2cj4",
    },
  ];

  return (
    <section
      id="blog"
      className="w-full bg-background relative overflow-hidden py-32 border-y border-border"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-24 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
              Library
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured Posts
            </h2>
          </div>

          {/* Byte Robot Reading */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block w-20 h-20 relative"
          >
            <Image
              src="/images/byte_researcher.png"
              alt="Byte Reading"
              fill
              sizes="80px"
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[var(--card)] border border-border rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer block"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--background)]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[var(--foreground)]">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-muted-foreground font-medium">
                    {post.readTime}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                    <FaArrowRight className="w-4 h-4 text-[var(--foreground)] group-hover:text-[var(--background)]" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
