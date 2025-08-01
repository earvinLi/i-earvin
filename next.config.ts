// External Dependencies
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
