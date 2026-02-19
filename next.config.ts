import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
