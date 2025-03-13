/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      },
    ]
  },
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
