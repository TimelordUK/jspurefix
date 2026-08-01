import 'reflect-metadata'

import { Setup } from '../env/setup'
import { makeSessionScope } from '../../runtime/session-scope'
import { SessionRegistry, REPLACED_BY_NEW_CONNECTION } from '../../transport/session/session-registry'
import { MsgTransport } from '../../transport/factory'
import { StringDuplex, StringDuplexTraits } from '../../transport'
import { SkeletonSession } from '../../sample/tcp/skeleton/skeleton-session'
import { SessionState } from '../../transport/session/session-state'
import { IJsFixConfig } from '../../config'

/**
 * End to end registry behaviour with real AsciiSessions, modelling the acceptor
 * side of https://github.com/TimelordUK/jspurefix/issues/153: client connects, its
 * socket goes half open without node noticing, the client reconnects.  Both
 * sessions carry the same SessionId, so the second must displace the first.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

async function waitFor (predicate: () => boolean, timeoutMs = 5000): Promise<void> {
  const start = Date.now()
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error('timed out waiting for condition')
    }
    await new Promise<void>(resolve => { setImmediate(resolve) })
  }
}

interface IAccepted {
  session: SkeletonSession
  /** settles when the session ends; never rejects, the reason is captured instead */
  run: Promise<void>
  outcome: { error: Error | null }
}

async function acceptConnection (config: IJsFixConfig, id: number): Promise<IAccepted> {
  const session = new SkeletonSession(config, 1, false)
  const transport = new MsgTransport(id, config, new StringDuplex('', StringDuplexTraits.None))
  const outcome: { error: Error | null } = { error: null }
  // attach the handler immediately - the registry can stop this session before the
  // test gets a chance to await, and an unobserved rejection would fail the run
  const run = session.run(transport).then(() => undefined).catch((e: Error) => { outcome.error = e })
  await waitFor(() => session.listenerCount('done') > 0)
  return { session, run, outcome }
}

test('a reconnecting counterparty displaces its stale session', async () => {
  const registry = new SessionRegistry(setup.serverConfig.logFactory)

  // each accepted connection gets its own scope, exactly as TcpAcceptor does
  const first = makeSessionScope(setup.serverConfig)
  first.sessionRegistry = registry
  const second = makeSessionScope(setup.serverConfig)
  second.sessionRegistry = registry

  const one = await acceptConnection(first, 1)
  expect(registry.count).toBe(1)
  expect(one.session.getState()).not.toBe(SessionState.Stopped)

  // the peer reconnects while session one still believes its socket is alive
  const two = await acceptConnection(second, 2)

  // exactly one live session, and it is the new one
  expect(registry.count).toBe(1)
  expect(one.session.getState()).toBe(SessionState.Stopped)
  expect(two.session.getState()).not.toBe(SessionState.Stopped)

  await one.run
  expect(one.outcome.error?.message).toBe(REPLACED_BY_NEW_CONNECTION)

  // and when the live session goes away the registry empties
  two.session.done()
  await two.run
  expect(registry.count).toBe(0)
})

test('sessions with distinct comp ids coexist on one acceptor', async () => {
  const registry = new SessionRegistry(setup.serverConfig.logFactory)

  const a = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-one' })
  a.sessionRegistry = registry
  const b = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-two' })
  b.sessionRegistry = registry

  const one = await acceptConnection(a, 1)
  const two = await acceptConnection(b, 2)

  expect(registry.count).toBe(2)
  expect(one.session.getState()).not.toBe(SessionState.Stopped)
  expect(two.session.getState()).not.toBe(SessionState.Stopped)

  one.session.done()
  await one.run
  expect(registry.count).toBe(1)
  two.session.done()
  await two.run
  expect(registry.count).toBe(0)
})
