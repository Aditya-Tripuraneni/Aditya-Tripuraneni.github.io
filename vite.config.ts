// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // '/' in dev (localhost), GitHub Pages subpath in prod
  base: mode === 'production' ? '/Aditya-Tripuraneni.github.io/' : '/',
}))
