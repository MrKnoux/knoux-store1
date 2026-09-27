import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a local verification build run beside another checkout or a running
  // dev server without the two fighting over the same build directory.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

export default nextConfig;
