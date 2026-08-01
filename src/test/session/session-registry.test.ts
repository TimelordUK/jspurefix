import { SessionRegistry, IStoppableSession, REPLACED_BY_NEW_CONNECTION } from '../../transport/session/session-registry'
import { SessionId } from '../../store/session-id'

/**
 * Reconnection semantics for an acceptor - see
 * https://github.com/TimelordUK/jspurefix/issues/153.  A counterparty whose socket
 * has gone half open reconnects and logs on again; the acceptor must end up with
 * exactly one live session for that SessionId, and it must be the new one.
 */

class FakeSession implements IStoppableSession {
  public stoppedWith: string | null = null
  constructor (public readonly name: string, private readonly onStop?: (s: FakeSession) => void) {}
  requestStop (reason: string): void {
    this.stoppedWith = reason
    this.onStop?.(this)
  }
}

const id = new SessionId('FIX4.4', 'acceptor-comp', 'client-comp')
const other = new SessionId('FIX4.4', 'acceptor-comp', 'another-client')

describe('SessionRegistry', () => {
  test('registering a new SessionId stops nothing', () => {
    const registry = new SessionRegistry()
    const first = new FakeSession('first')

    expect(registry.register(id, first)).toBe(false)
    expect(registry.count).toBe(1)
    expect(registry.get(id)).toBe(first)
    expect(first.stoppedWith).toBeNull()
  })

  test('a second connection for the same SessionId stops the stale session', () => {
    const registry = new SessionRegistry()
    const first = new FakeSession('first')
    const second = new FakeSession('second')

    registry.register(id, first)
    expect(registry.register(id, second)).toBe(true)

    expect(first.stoppedWith).toBe(REPLACED_BY_NEW_CONNECTION)
    expect(second.stoppedWith).toBeNull()
    expect(registry.count).toBe(1)
    expect(registry.get(id)).toBe(second)
  })

  test('the replaced session unregistering does not evict its successor', () => {
    const registry = new SessionRegistry()
    const second = new FakeSession('second')
    // a real session unregisters from inside stop(), i.e. synchronously during the
    // requestStop the registry itself issues
    const first = new FakeSession('first', (s) => { registry.unregister(id, s) })

    registry.register(id, first)
    registry.register(id, second)

    expect(registry.count).toBe(1)
    expect(registry.get(id)).toBe(second)
  })

  test('re-registering the same instance is a no-op', () => {
    const registry = new SessionRegistry()
    const only = new FakeSession('only')

    registry.register(id, only)
    expect(registry.register(id, only)).toBe(false)

    expect(only.stoppedWith).toBeNull()
    expect(registry.count).toBe(1)
  })

  test('distinct SessionIds coexist', () => {
    const registry = new SessionRegistry()
    const a = new FakeSession('a')
    const b = new FakeSession('b')

    registry.register(id, a)
    registry.register(other, b)

    expect(registry.count).toBe(2)
    expect(registry.keys().sort()).toEqual([
      'FIX4.4-acceptor-comp-another-client',
      'FIX4.4-acceptor-comp-client-comp'
    ])
    expect(a.stoppedWith).toBeNull()
    expect(b.stoppedWith).toBeNull()
  })

  test('unregister removes only the registered instance', () => {
    const registry = new SessionRegistry()
    const live = new FakeSession('live')
    const ghost = new FakeSession('ghost')

    registry.register(id, live)
    registry.unregister(id, ghost)
    expect(registry.count).toBe(1)

    registry.unregister(id, live)
    expect(registry.count).toBe(0)
    expect(registry.get(id)).toBeNull()
  })
})
