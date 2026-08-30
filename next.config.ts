import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["radix-ui", "motion"],
  },
};

export default nextConfig;
