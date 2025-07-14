import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'www.caminodelosjesuitas.com',
      },
      {
        protocol: 'https',
        hostname: 'static.tokkobroker.com',
      },
      {
        protocol: 'https',
        hostname: 'embedsocial.com',
      },
    ],
  },
};

export default nextConfig;
