import 'reflect-metadata'

import { StringDuplex, StringDuplexTraits } from '../../transport'
import { MsgTransport } from '../../transport/factory'
import { SkeletonSession } from '../../sample/tcp/skeleton/skeleton-session'
import { Setup } from '../env/setup'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/146
 *
 * A long-lived FixSession is reused across transport reconnects (the design used
 * by RecoveringTcpInitiator).  Each reconnect calls session.run() -> waitPromise(),
 * which registered a fresh pair of 'error'/'done' listeners on the session emitter
 * with `on` and never detached them.  The promise settles only once, so:
 *
 *   - the listener that fired stayed attached (it used `on`, not `once`), and
 *   - the sibling listener that never fired was orphaned forever.
 *
 * After ~10 reconnect cycles Node prints MaxListenersExceededWarning, and every
 * orphaned listener retains a closure over the settled promise/transport - a real
 * (slow) memory leak for the lifetime of the process.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

function newTransport (config: any): MsgTransport {
  const duplex = new StringDuplex('', StringDuplexTraits.None)
  return new MsgTransport(0, config, duplex)
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
 * Drive a single reconnect cycle against one reused session: run the session on a
 * fresh transport, then settle the run promise the way a clean logout would by
 * emitting 'done'.  AsciiSession.run() awaits store initialisation before
 * waitPromise() attaches its listeners, so wait for the 'done' listener to appear
 * before emitting.
 */
async function reconnectCycle (session: SkeletonSession, config: any): Promise<void> {
  const run = session.run(newTransport(config))
  await waitFor(() => session.listenerCount('done') > 0)
  session.emit('done')
  await run
}

test('session listeners do not accumulate across repeated reconnects', async () => {
  // acceptor session so waitPromise does not attempt to send a logon
  const session = new SkeletonSession(setup.serverConfig, 1, false)

  const cycles = 15
  for (let i = 0; i < cycles; ++i) {
    await reconnectCycle(session, setup.serverConfig)
  }

  // Before the fix these climbed by one per reconnect (== cycles) and Node emitted
  // MaxListenersExceededWarning past 10.  After the fix both handlers are detached
  // when the promise settles, so the counts stay bounded regardless of reconnects.
  expect(session.listenerCount('done')).toBeLessThanOrEqual(1)
  expect(session.listenerCount('error')).toBeLessThanOrEqual(1)
})
