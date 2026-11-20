import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OWNER_KEY = 'aditya-owner'

export interface TrackDeps {
  fetchFn?: typeof fetch
  /** Session-scoped store used to dedupe pings per path. */
  storage?: Storage
  search?: string
  referrer?: string
  userAgent?: string
}

function endpoint(): string {
  return import.meta.env.VITE_VISIT_ENDPOINT || '/api/visit'
}

export function trackVisit(path: string, deps: TrackDeps = {}): void {
  try {
    const search = deps.search ?? window.location.search
    if (new URLSearchParams(search).get('me') === '1') {
      localStorage.setItem(OWNER_KEY, '1')
    }
    if (localStorage.getItem(OWNER_KEY)) return

    const session = deps.storage ?? sessionStorage
    const key = `visit:${path}`
    if (session.getItem(key)) return
    session.setItem(key, '1')

    const send = deps.fetchFn ?? fetch
    void send(endpoint(), {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: path,
        referrer: deps.referrer ?? document.referrer,
        userAgent: deps.userAgent ?? navigator.userAgent,
      }),
    }).catch(() => {})
  } catch {
    // Tracking must never break the page.
  }
}

export function usePageTracking(): void {
  const { pathname } = useLocation()
  useEffect(() => {
    trackVisit(pathname)
  }, [pathname])
}
