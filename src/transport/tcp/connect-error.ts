/**
 * A readable reason for a failed connection.
 *
 * Node raises an AggregateError when the host resolved to more than one address and
 * every attempt failed.  That is not an edge case: 'localhost' is both ::1 and
 * 127.0.0.1 on any modern machine, so it is what an ordinary refused connection looks
 * like.  Its own message is empty and the detail sits in errors[], so reporting
 * e.message alone said nothing at all about the commonest failure there is - an
 * application catching a rejected connect saw an Error with no message.
 *
 * Falls back to the code (ECONNREFUSED, ENOTFOUND, ETIMEDOUT) when there is no
 * message anywhere, which is still enough to act on.
 */
export function describeConnectError (e: unknown): string {
  if (e == null) return 'unknown error'
  const described = detail(e)
  return described.length > 0 ? described : String(e)
}

/**
 * The reason, or '' when this error carries none.
 *
 * Kept separate from the public function so a nested error with nothing to say
 * contributes nothing, rather than a stringified 'Error' that would then look like a
 * reason and stop the aggregate falling back to its own code.
 */
function detail (e: unknown): string {
  if (e == null) return ''

  const err = e as { message?: string, code?: string, errors?: unknown[] }

  if (Array.isArray(err.errors) && err.errors.length > 0) {
    // every address usually fails the same way - say it once rather than repeating
    // 'connect ECONNREFUSED' for each family
    const unique = Array.from(new Set(err.errors.map(detail).filter(m => m.length > 0)))
    if (unique.length > 0) return unique.join('; ')
  }

  if (err.message) return err.message
  if (err.code) return err.code
  return ''
}

/**
 * Give an error a message when it has none, keeping the object itself.
 *
 * Deliberately not a wrapper: `code` and `errors` are what a caller switches on, and
 * building a fresh Error to hold the text would throw both away.  Returns the same
 * error so it can be used inline.
 */
export function withConnectReason (e: Error): Error {
  if (!e.message) {
    e.message = describeConnectError(e)
  }
  return e
}
