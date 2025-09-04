import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use a relative base so the built site works when served from / or /docs on GitHub Pages
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
