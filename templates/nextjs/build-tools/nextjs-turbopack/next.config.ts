import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is enabled via CLI flag: next dev --turbopack
  // This config file contains additional settings

  // React strict mode
  reactStrictMode: true,

  // Disable x-powered-by header
  poweredByHeader: false,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features
  experimental: {
    // Enable typed routes
    typedRoutes: true,
  },
};

export default nextConfig;
