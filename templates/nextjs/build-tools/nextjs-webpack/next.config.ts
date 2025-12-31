import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use Webpack (default bundler)
  // Turbopack is disabled by default

  // React strict mode
  reactStrictMode: true,

  // Disable x-powered-by header
  poweredByHeader: false,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Example: Add custom webpack plugins or loaders here

    // Optimization for server builds
    if (isServer) {
      // Server-specific configuration
    }

    return config;
  },

  // Experimental features
  experimental: {
    // Enable typed routes
    typedRoutes: true,
  },
};

export default nextConfig;
