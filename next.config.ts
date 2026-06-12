import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
