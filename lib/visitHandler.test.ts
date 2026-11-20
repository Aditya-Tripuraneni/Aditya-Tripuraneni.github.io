import { describe, expect, it } from 'vitest'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHandler } from './visitHandler'

const CHROME_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36'
const WEBHOOK = 'https://discord.test/api/webhooks/fake'

function makeRes() {
  const state = { status: 0, headers: {} as Record<string, string> }
  const res = {
    setHeader(k: string, v: string) {
      state.headers[k] = v
      return res
    },
    status(code: number) {
      state.status = code
      return res
    },
    end() {
      return res
    },
    json() {
      return res
    },
  }
  return { res: res as unknown as VercelResponse, state }
}

function makeReq(over: Partial<{ method: string; headers: Record<string, string>; body: unknown }> = {}) {
  return {
    method: 'POST',
    headers: {
      'user-agent': CHROME_UA,
      'x-forwarded-for': '1.2.3.4, 5.6.7.8',
      'x-vercel-ip-city': 'Toronto',
      'x-vercel-ip-country-region': 'ON',
      'x-vercel-ip-country': 'CA',
      origin: 'http://localhost:5173',
    },
    body: { page: '/', referrer: '', userAgent: CHROME_UA },
    ...over,
  } as unknown as VercelRequest
}

function makeFetch(opts: { discordThrows?: boolean } = {}) {
  const calls: { url: string; body?: string }[] = []
  const fetchFn = (async (url: string, init?: RequestInit) => {
    calls.push({ url, body: init?.body as string | undefined })
    if (url.startsWith('https://ipinfo.io')) {
      return { ok: true, json: async () => ({ org: 'AS15169 Google LLC', region: 'Ontario' }) }
    }
    if (opts.discordThrows) throw new Error('discord down')
    return { ok: true }
  }) as unknown as typeof fetch
  const discordCalls = () => calls.filter((c) => c.url === WEBHOOK)
  return { fetchFn, calls, discordCalls }
}

describe('visit handler', () => {
  it('posts one built payload to the webhook for a valid visit', async () => {
    const { fetchFn, discordCalls } = makeFetch()
    const { res, state } = makeRes()
    await createHandler({ fetchFn, webhookUrl: WEBHOOK })(makeReq(), res)
    expect(state.status).toBe(204)
    expect(discordCalls()).toHaveLength(1)
    const payload = JSON.parse(discordCalls()[0].body as string)
    expect(payload.embeds[0].title).toBe('👀 Visitor in Toronto')
    expect(payload.embeds[0].fields[1]).toMatchObject({ name: 'Network', value: 'Google LLC' })
  })

  it('answers GET with 405 and sends nothing', async () => {
    const { fetchFn, calls } = makeFetch()
    const { res, state } = makeRes()
    await createHandler({ fetchFn, webhookUrl: WEBHOOK })(makeReq({ method: 'GET' }), res)
    expect(state.status).toBe(405)
    expect(calls).toHaveLength(0)
  })

  it('answers a malformed body with 400 and sends nothing', async () => {
    const { fetchFn, calls } = makeFetch()
    const { res, state } = makeRes()
    await createHandler({ fetchFn, webhookUrl: WEBHOOK })(makeReq({ body: { page: 'nope' } }), res)
    expect(state.status).toBe(400)
    expect(calls).toHaveLength(0)
  })

  it('ignores bots with 204 and no Discord call', async () => {
    const { fetchFn, calls } = makeFetch()
    const { res, state } = makeRes()
    const botBody = { page: '/', referrer: '', userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1)' }
    await createHandler({ fetchFn, webhookUrl: WEBHOOK })(makeReq({ body: botBody }), res)
    expect(state.status).toBe(204)
    expect(calls).toHaveLength(0)
  })

  it('still answers 204 when Discord fails', async () => {
    const { fetchFn } = makeFetch({ discordThrows: true })
    const { res, state } = makeRes()
    await createHandler({ fetchFn, webhookUrl: WEBHOOK })(makeReq(), res)
    expect(state.status).toBe(204)
  })

  it('answers 204 without any network call when no webhook is configured', async () => {
    const { fetchFn, calls } = makeFetch()
    const { res, state } = makeRes()
    await createHandler({ fetchFn, webhookUrl: '' })(makeReq(), res)
    expect(state.status).toBe(204)
    expect(calls).toHaveLength(0)
  })

  it('allows localhost and the GitHub Pages origin, not others', async () => {
    const { fetchFn } = makeFetch()
    for (const [origin, allowed] of [
      ['http://localhost:5173', true],
      ['https://aditya-tripuraneni.github.io', true],
      ['https://evil.example', false],
    ] as const) {
      const { res, state } = makeRes()
      await createHandler({ fetchFn, webhookUrl: '' })(makeReq({ headers: { origin } }), res)
      expect(state.headers['Access-Control-Allow-Origin']).toBe(allowed ? origin : undefined)
    }
  })
})
