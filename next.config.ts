import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  unstable_runtimeJS: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
