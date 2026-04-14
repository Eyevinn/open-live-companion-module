/**
 * OSC Service Access Token (SAT) exchange for the Open Live API.
 *
 * Exchanges a PAT for a short-lived SAT, caching it and refreshing
 * automatically 5 minutes before expiry.
 *
 * When no PAT is configured (local / self-hosted), getSat() returns
 * undefined and callers should omit the Authorization header.
 */

const TOKEN_EXCHANGE_URL = 'https://token.svc.prod.osaas.io/servicetoken'
const OPEN_LIVE_SERVICE_ID = 'eyevinn-open-live'
const REFRESH_BUFFER_MS = 5 * 60 * 1000

interface SatCache {
	token: string
	expiresAt: number
}

let cache: SatCache | null = null

function isExpiringSoon(c: SatCache): boolean {
	return Date.now() >= c.expiresAt - REFRESH_BUFFER_MS
}

/**
 * Returns a valid SAT for the Open Live API, or undefined if no PAT is set.
 * Throws if the exchange fails (bad PAT, network error).
 */
export async function getSat(pat: string | undefined): Promise<string | undefined> {
	if (!pat) return undefined

	if (cache && !isExpiringSoon(cache)) return cache.token

	const res = await fetch(TOKEN_EXCHANGE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json',
			'x-pat-jwt': `Bearer ${pat}`,
		},
		body: JSON.stringify({ serviceId: OPEN_LIVE_SERVICE_ID }),
	})

	if (!res.ok) {
		const body = await res.text()
		throw new Error(`SAT exchange failed (${res.status}): ${body.slice(0, 200)}`)
	}

	const data = (await res.json()) as { token: string; expiry: number }
	cache = { token: data.token, expiresAt: data.expiry * 1000 }
	return cache.token
}

/** Invalidate the cached SAT (e.g. after a 401 response). */
export function invalidateSat(): void {
	cache = null
}
