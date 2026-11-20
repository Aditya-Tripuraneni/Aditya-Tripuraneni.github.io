import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Dev only: serve /api/visit through Vite so localhost behaves like Vercel.
function devApi(mode: string): Plugin {
  return {
    name: 'dev-api-visit',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), '')
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value
      }

      server.middlewares.use('/api/visit', async (req, res) => {
        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        let body: unknown
        try {
          body = JSON.parse(Buffer.concat(chunks).toString() || 'null')
        } catch {
          body = null
        }

        const vercelRes = {
          setHeader: (k: string, v: string) => {
            res.setHeader(k, v)
            return vercelRes
          },
          status: (code: number) => {
            res.statusCode = code
            return vercelRes
          },
          end: () => {
            res.end()
            return vercelRes
          },
        }

        try {
          const mod = await server.ssrLoadModule('/api/visit.ts')
          await mod.default({ method: req.method, headers: req.headers, body }, vercelRes)
        } catch (err) {
          server.config.logger.error(`/api/visit failed: ${(err as Error).message}`)
          res.statusCode = 204
          res.end()
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  // Use a relative base so the built site works when served from / or /docs on GitHub Pages
  base: './',
  plugins: [react(), devApi(mode)],
  build: {
    outDir: 'docs'
  }
}))
