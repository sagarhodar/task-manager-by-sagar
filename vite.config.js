import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // PWA and Performance optimizations
  build: {
    rollupOptions: {
      output: {
        // Split vendor libraries for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          icons: ['lucide-react']
        }
      }
    },
    // Generate source maps for debugging
    sourcemap: true
  },
  
  // Development server settings
  server: {
    port: 3000,
    host: true, // Allows access from network (useful for mobile testing)
    open: true  // Auto-open browser
  },
  
  // Preview server settings (for production testing)
  preview: {
    port: 3000,
    host: true,
    open: true
  },
  
  // Ensure service worker is copied to build
  publicDir: 'public'
})