import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/numiq",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
