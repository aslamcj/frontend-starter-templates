import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases - matches tsconfig.json paths
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  // Development server configuration
  server: {
    port: 5173,
    strictPort: true,
    open: true, // Open browser on start
    cors: true,
  },

  // Preview server configuration (for production build preview)
  preview: {
    port: 4173,
    strictPort: true,
  },

  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',

    // Generate source maps for debugging
    sourcemap: true,

    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunk for React
          vendor: ['react', 'react-dom'],
        },
      },
    },

    // Minification
    minify: 'esbuild',

    // Target browsers
    target: 'es2022',
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
