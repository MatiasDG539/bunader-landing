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
      // [LEGACY TOKKO] imágenes de Tokko Broker (ver legacy/tokko/README.md)
      // {
      //   protocol: 'https',
      //   hostname: 'static.tokkobroker.com',
      // },
      {
        // Fotos de propiedades y emprendimientos de GVAmax
        protocol: 'https',
        hostname: 'gvamax.ar',
        pathname: '/serverdata/**',
      },
      {
        protocol: 'https',
        hostname: 'embedsocial.com',
      },
    ],
  },
};

export default nextConfig;
