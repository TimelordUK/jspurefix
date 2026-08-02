import 'reflect-metadata'

import { StringDuplex, StringDuplexTraits } from '../../transport'
import { MsgTransport } from '../../transport/factory'
import { SkeletonSession } from '../../sample/tcp/skeleton/skeleton-session'
import { Setup } from '../env/setup'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/153
 *
 * FixSession.subscribe() attached arrow function closures to the transport, while
 * unsubscribe() called removeListener with the raw method references.  EventEmitter
 * matches listeners by identity, so unsubscribe removed nothing:
 *
 *   - listeners accumulated on every transport the session ever ran, and
 *   - a dead transport could still drive a session which had already moved on to a
 *     new connection.  That is exactly the reporter's scenario - client 1's socket
 *     goes half open, client 2 connects, and when client 1's socket finally emits
 *     'end' it terminates the live session belonging to client 2.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

function newTransport (config: any, id: number): MsgTransport {
  const duplex = new StringDuplex('', StringDuplexTraits.None)
  return new MsgTransport(id, config, duplex)
}

async function waitFor (predicate: () => boolean, timeoutMs = 5000): Promise<void> {
  const start = Date.now()
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error('timed out waiting for condition')
    }
    await new Promise<void>(resolve => { setImmediate(resolve) })
  }
}

/**
 * run the session on this transport and wait until it is actually subscribed.
 * AsciiSession.run() awaits store initialisation before FixSession.run() subscribes,
 * so poll for the session's own run listeners which are attached immediately after.
 */
async function startOn (session: SkeletonSession, transport: MsgTransport): Promise<{ run: Promise<number> }> {
  // wrapped - an async function returning a bare promise would adopt it and only
  // resolve once the whole session run had finished
  const run = session.run(transport)
  await waitFor(() => session.listenerCount('done') > 0)
  return { run }
}

function transportListenerCount (transport: MsgTransport): number {
  const rx = transport.receiver
  const tx = transport.transmitter
  return ['msg', 'error', 'done', 'end', 'decoded'].reduce((acc, e) => acc + rx.listenerCount(e), 0) +
    ['error', 'encoded'].reduce((acc, e) => acc + tx.listenerCount(e), 0)
}

test('unsubscribe detaches every listener it attached', async () => {
  const session = new SkeletonSession(setup.serverConfig, 1, false)
  const transport = newTransport(setup.serverConfig, 1)

  const before = transportListenerCount(transport)
  const { run } = await startOn(session, transport)
  expect(transportListenerCount(transport)).toBe(before + 7)

  session.emit('done')
  await run
  session.reset()

  // before the fix this stayed at before + 7 - removeListener never matched
  expect(transportListenerCount(transport)).toBe(before)
})

test('listeners do not accumulate on the transport across reconnects', async () => {
  const session = new SkeletonSession(setup.serverConfig, 1, false)

  let last: MsgTransport | null = null
  for (let i = 0; i < 10; ++i) {
    const transport = newTransport(setup.serverConfig, i + 1)
    const { run } = await startOn(session, transport)
    session.emit('done')
    await run
    last = transport
  }

  // exactly one live subscription at any time
  expect(transportListenerCount(last!)).toBeGreaterThan(0)
  expect((last!).receiver.listenerCount('msg')).toBe(1)
})

test('an end from a replaced transport does not terminate the live session', async () => {
  const session = new SkeletonSession(setup.serverConfig, 1, false)

  const first = newTransport(setup.serverConfig, 1)
  const { run: firstRun } = await startOn(session, first)
  session.emit('done')
  await firstRun

  // peer reconnects - the session moves onto a new transport
  const second = newTransport(setup.serverConfig, 2)
  await startOn(session, second)

  const stateOnSecond = session.getState()

  // the abandoned socket finally notices it is dead and emits.  Both guards apply:
  // the listeners were removed, and even a listener which survived would be told
  // this is not the current transport.  TcpAcceptor keeps its own 'error' listener
  // on every transport it created (that is how it harvests them) - stand in for it
  // here, otherwise EventEmitter would rethrow the unhandled 'error'.
  const harvested: Error[] = []
  first.receiver.on('error', (e: Error) => { harvested.push(e) })
  first.receiver.emit('end')
  first.receiver.emit('error', new Error('stale socket reset by peer'))

  expect(harvested).toHaveLength(1)
  expect(session.getState()).toBe(stateOnSecond)
  expect(second.receiver.listenerCount('msg')).toBe(1)
})
