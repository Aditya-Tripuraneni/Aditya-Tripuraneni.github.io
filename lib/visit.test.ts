import { describe, expect, it } from 'vitest'
import {
  buildDiscordPayload,
  firstIp,
  isBot,
  lookupNetwork,
  parseVisit,
  type VisitContext,
} from './visit'

const CHROME_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36'

const ctx = (over: Partial<VisitContext> = {}): VisitContext => ({
  input: { page: '/', referrer: 'https://www.google.com/', userAgent: CHROME_UA },
  geo: { city: 'Toronto', region: 'ON', country: 'CA' },
  network: 'Google LLC',
  ...over,
})

const fieldValue = (payload: ReturnType<typeof buildDiscordPayload>, name: string) =>
  payload.embeds[0].fields.find((f) => f.name === name)?.value

describe('isBot', () => {
  it.each([
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 HeadlessChrome/120.0.0.0 Safari/537.36',
    'curl/8.4.0',
    'facebookexternalhit/1.1',
    'Mozilla/5.0 Chrome-Lighthouse',
    '',
  ])('flags %j as a bot', (ua) => {
    expect(isBot(ua)).toBe(true)
  })

  it('does not flag a normal Chrome browser', () => {
    expect(isBot(CHROME_UA)).toBe(false)
  })
})

describe('firstIp', () => {
  it('takes the first address of a forwarded chain', () => {
    expect(firstIp('1.2.3.4, 5.6.7.8')).toBe('1.2.3.4')
  })
  it('returns undefined when the header is missing', () => {
    expect(firstIp(undefined)).toBeUndefined()
  })
})

describe('parseVisit', () => {
  it('accepts a well-formed body', () => {
    const body = { page: '/', referrer: '', userAgent: 'x' }
    expect(parseVisit(body)).toEqual(body)
  })
  it('rejects a page that does not start with a slash', () => {
    expect(parseVisit({ page: 'evil', referrer: '', userAgent: 'x' })).toBeNull()
  })
  it('rejects null', () => {
    expect(parseVisit(null)).toBeNull()
  })
})

describe('buildDiscordPayload', () => {
  it('titles the embed with the city and lists the five fields', () => {
    const p = buildDiscordPayload(ctx())
    expect(p.embeds[0].title).toBe('👀 Visitor in Toronto')
    expect(p.embeds[0].fields.map((f) => f.name)).toEqual([
      'Location',
      'Network',
      'Referrer',
      'Page',
      'Device',
    ])
    expect(fieldValue(p, 'Location')).toBe('Toronto, ON, CA')
    expect(fieldValue(p, 'Network')).toBe('Google LLC')
  })

  it('falls back when city, geo and referrer are missing', () => {
    const p = buildDiscordPayload(
      ctx({ geo: {}, input: { page: '/', referrer: '', userAgent: CHROME_UA } }),
    )
    expect(p.embeds[0].title).toBe('👀 Visitor')
    expect(fieldValue(p, 'Location')).toBe('Unknown')
    expect(fieldValue(p, 'Referrer')).toBe('Direct')
  })

  it('truncates hostile input and disables mentions', () => {
    const p = buildDiscordPayload(
      ctx({
        input: { page: '/', referrer: '@everyone', userAgent: 'A'.repeat(5000) },
      }),
    )
    for (const f of p.embeds[0].fields) expect(f.value.length).toBeLessThanOrEqual(1000)
    expect(p.allowed_mentions).toEqual({ parse: [] })
  })
})

describe('lookupNetwork', () => {
  const jsonResponse = (body: unknown) =>
    ({ ok: true, json: async () => body }) as unknown as Response

  it('strips the AS number and returns the region', async () => {
    const fake = (async () =>
      jsonResponse({ org: 'AS15169 Google LLC', region: 'Ontario' })) as unknown as typeof fetch
    expect(await lookupNetwork('1.2.3.4', fake)).toEqual({
      network: 'Google LLC',
      region: 'Ontario',
    })
  })

  it('returns Unknown when fetch throws', async () => {
    const fake = (async () => {
      throw new Error('boom')
    }) as unknown as typeof fetch
    expect(await lookupNetwork('1.2.3.4', fake)).toEqual({ network: 'Unknown' })
  })

  it('returns Unknown without calling fetch when ip is undefined', async () => {
    let called = false
    const fake = (async () => {
      called = true
      return jsonResponse({})
    }) as unknown as typeof fetch
    expect(await lookupNetwork(undefined, fake)).toEqual({ network: 'Unknown' })
    expect(called).toBe(false)
  })
})
