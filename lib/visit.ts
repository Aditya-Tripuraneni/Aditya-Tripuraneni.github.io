export interface VisitInput {
  page: string
  referrer: string
  userAgent: string
}

export interface Geo {
  city?: string
  region?: string
  country?: string
}

export interface VisitContext {
  input: VisitInput
  geo: Geo
  network: string
}

const BOT_PATTERN =
  /bot|crawl|spider|slurp|headless|lighthouse|curl|wget|python-requests|facebookexternalhit|preview|monitor|uptime|pingdom/i

const FIELD_LIMIT = 1000
const LOOKUP_TIMEOUT_MS = 1500

export function isBot(userAgent: string): boolean {
  return userAgent.trim() === '' || BOT_PATTERN.test(userAgent)
}

export function firstIp(forwardedFor: string | undefined): string | undefined {
  const first = forwardedFor?.split(',')[0]?.trim()
  return first ? first : undefined
}

export function parseVisit(body: unknown): VisitInput | null {
  if (typeof body !== 'object' || body === null) return null
  const { page, referrer, userAgent } = body as Record<string, unknown>
  if (typeof page !== 'string' || !page.startsWith('/')) return null
  return {
    page,
    referrer: typeof referrer === 'string' ? referrer : '',
    userAgent: typeof userAgent === 'string' ? userAgent : '',
  }
}

function clip(value: string): string {
  return value.length > FIELD_LIMIT ? `${value.slice(0, FIELD_LIMIT - 1)}…` : value
}

export function buildDiscordPayload(ctx: VisitContext, now: Date = new Date()) {
  const { input, geo, network } = ctx
  const location = [geo.city, geo.region, geo.country].filter(Boolean).join(', ')
  const field = (name: string, value: string, inline?: boolean) => ({
    name,
    value: clip(value || 'Unknown'),
    ...(inline === undefined ? {} : { inline }),
  })
  return {
    allowed_mentions: { parse: [] as [] },
    embeds: [
      {
        title: geo.city ? `👀 Visitor in ${geo.city}` : '👀 Visitor',
        fields: [
          field('Location', location),
          field('Network', network),
          field('Referrer', input.referrer || 'Direct'),
          field('Page', input.page),
          field('Device', input.userAgent),
        ],
        timestamp: now.toISOString(),
      },
    ],
  }
}

export async function lookupNetwork(
  ip: string | undefined,
  fetchFn: typeof fetch = fetch,
): Promise<{ network: string; region?: string }> {
  if (!ip) return { network: 'Unknown' }
  try {
    const token = process.env.IPINFO_TOKEN
    const url = `https://ipinfo.io/${encodeURIComponent(ip)}/json${token ? `?token=${encodeURIComponent(token)}` : ''}`
    const res = await fetchFn(url, { signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS) })
    if (!res.ok) return { network: 'Unknown' }
    const data = (await res.json()) as { org?: string; region?: string }
    const network = data.org?.replace(/^AS\d+\s+/, '').trim() || 'Unknown'
    return data.region ? { network, region: data.region } : { network }
  } catch {
    return { network: 'Unknown' }
  }
}
