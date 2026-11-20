import type { VercelRequest, VercelResponse } from '@vercel/node'
import { buildDiscordPayload, firstIp, isBot, lookupNetwork, parseVisit } from './visit'

export interface HandlerDeps {
  fetchFn?: typeof fetch
  /** Explicit value wins (even empty = disabled); otherwise DISCORD_WEBHOOK_URL is read per request. */
  webhookUrl?: string
}

const GITHUB_PAGES_ORIGIN = 'https://aditya-tripuraneni.github.io'
const LOCALHOST_ORIGIN = /^http:\/\/localhost(:\d+)?$/

function originAllowed(origin: string): boolean {
  if (origin === GITHUB_PAGES_ORIGIN || LOCALHOST_ORIGIN.test(origin)) return true
  const extra = (process.env.ALLOWED_ORIGIN ?? '').split(',').map((s) => s.trim())
  return extra.includes(origin)
}

function header(req: VercelRequest, name: string): string | undefined {
  const value = req.headers[name]
  return Array.isArray(value) ? value[0] : value
}

function decode(value: string | undefined): string | undefined {
  if (!value) return undefined
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function createHandler(deps: HandlerDeps = {}) {
  const fetchFn = deps.fetchFn ?? fetch

  return async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
    const origin = header(req, 'origin')
    if (origin && originAllowed(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin)
      res.setHeader('Vary', 'Origin')
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    }

    if (req.method === 'OPTIONS') {
      res.status(204).end()
      return
    }
    if (req.method !== 'POST') {
      res.status(405).end()
      return
    }

    const input = parseVisit(req.body)
    if (!input) {
      res.status(400).end()
      return
    }
    if (isBot(input.userAgent)) {
      res.status(204).end()
      return
    }

    try {
      const webhookUrl = deps.webhookUrl ?? process.env.DISCORD_WEBHOOK_URL ?? ''
      const geo = {
        city: decode(header(req, 'x-vercel-ip-city')),
        region: header(req, 'x-vercel-ip-country-region'),
        country: header(req, 'x-vercel-ip-country'),
      }
      if (webhookUrl) {
        const { network } = await lookupNetwork(firstIp(header(req, 'x-forwarded-for')), fetchFn)
        const payload = buildDiscordPayload({ input, geo, network })
        await fetchFn(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(4000),
        })
      }
    } catch {
      // A failed ping must never affect the visitor.
    }
    res.status(204).end()
  }
}
