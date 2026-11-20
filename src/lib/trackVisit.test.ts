// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { trackVisit } from './trackVisit'

function setup(search = '') {
  const calls: { url: string; init: RequestInit }[] = []
  const fetchFn = (async (url: string, init: RequestInit) => {
    calls.push({ url, init })
    return { ok: true }
  }) as unknown as typeof fetch
  const deps = {
    fetchFn,
    search,
    referrer: 'https://www.google.com/',
    userAgent: 'Mozilla/5.0 Test',
  }
  return { calls, deps }
}

beforeEach(() => {
  localStorage.clear()
  sessionStorage.clear()
})

describe('trackVisit', () => {
  it('sends one POST with page, referrer and userAgent', () => {
    const { calls, deps } = setup()
    trackVisit('/', deps)
    expect(calls).toHaveLength(1)
    expect(calls[0].url).toBe('/api/visit')
    expect(calls[0].init.method).toBe('POST')
    expect(JSON.parse(calls[0].init.body as string)).toEqual({
      page: '/',
      referrer: 'https://www.google.com/',
      userAgent: 'Mozilla/5.0 Test',
    })
  })

  it('does not send twice for the same path in a session', () => {
    const { calls, deps } = setup()
    trackVisit('/', deps)
    trackVisit('/', deps)
    expect(calls).toHaveLength(1)
  })

  it('sends again for a different path', () => {
    const { calls, deps } = setup()
    trackVisit('/', deps)
    trackVisit('/projects', deps)
    expect(calls).toHaveLength(2)
  })

  it('never sends for the owner after ?me=1 is seen', () => {
    const first = setup('?me=1')
    trackVisit('/', first.deps)
    expect(first.calls).toHaveLength(0)
    const later = setup()
    trackVisit('/projects', later.deps)
    expect(later.calls).toHaveLength(0)
  })

  it('does not throw when storage or fetch fail', () => {
    const { deps } = setup()
    const broken = {
      getItem: () => {
        throw new Error('blocked')
      },
      setItem: () => {
        throw new Error('blocked')
      },
    } as unknown as Storage
    const failingFetch = (async () => {
      throw new Error('offline')
    }) as unknown as typeof fetch
    expect(() => trackVisit('/', { ...deps, storage: broken, fetchFn: failingFetch })).not.toThrow()
  })
})
