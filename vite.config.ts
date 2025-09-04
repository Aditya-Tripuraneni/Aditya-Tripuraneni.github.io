// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // '/' in dev (localhost), GitHub Pages subpath in prod
  base: mode === 'production' ? '/Aditya-Tripuraneni.github.io/' : '/',
  build: {
    outDir: 'docs', // Build to docs folder instead of dist
    // Ensure proper MIME types for GitHub Pages
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Use legacy chunk names without hashes for better compatibility
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        format: 'iife'
      }
    }
  }
}))
