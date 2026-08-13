import 'reflect-metadata'

import { Setup } from '../env/setup'
import { makeSessionScope } from '../../runtime/session-scope'
import { MsgTransport } from '../../transport/factory'
import { FixDuplex, StringDuplex, StringDuplexTraits } from '../../transport'
import { AsciiSession } from '../../transport/ascii/ascii-session'
import { SessionState } from '../../transport/session/session-state'
import { IJsFixConfig } from '../../config'
import { MsgView } from '../../buffer'
import { MsgType } from '../../types'

/**
 * onLogon is the application's say over who gets a session.
 *
 * Two long standing issues meet at this one call site:
 *
 *   #19 the returned boolean was read, logged and thrown away - refusing a peer had
 *       no effect at all, the handshake completed regardless
 *   #64 the hook was synchronous, so credentials could not be checked against an
 *       async source such as an http api or a database
 *
 * So the verdict is now honoured, and it may arrive as a promise.  While that promise
 * is pending the transport is paused and anything the peer sends is queued, because a
 * TCP segment can carry several messages and the parser emits them all in one
 * synchronous burst - see https://github.com/TimelordUK/jspurefix/issues/19 and
 * https://github.com/TimelordUK/jspurefix/issues/64
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

type Verdict = boolean | Promise<boolean>

interface ISent {
  msgType: string
  txt: string
}

/**
 * A session that answers logon attempts however the test tells it to, and records
 * enough of what happened to assert on it.  heartbeat is off so a refused session
 * does not leave a timer holding the event loop open.
 */
class VerdictSession extends AsciiSession {
  public verdict: () => Verdict = () => true
  public readyCount: number = 0
  public stopped: boolean = false
  public stopError: Error | null = null
  public readonly sent: ISent[] = []
  public readonly seenLogonAttempts: Array<{ user: string, password: string }> = []

  constructor (config: IJsFixConfig) {
    super(config)
    this.heartbeat = false
  }

  protected onApplicationMsg (_msgType: string, _view: MsgView): void {}
  protected onDecoded (_msgType: string, _txt: string): void {}

  protected onEncoded (msgType: string, txt: string): void {
    this.sent.push({ msgType, txt })
  }

  protected onReady (_view: MsgView): void {
    this.readyCount++
  }

  protected onStopped (error?: Error): void {
    this.stopped = true
    this.stopError = error ?? null
  }

  protected onLogon (_view: MsgView, user: string, password: string): Verdict {
    this.seenLogonAttempts.push({ user, password })
    return this.verdict()
  }

  public sentTypes (): string[] {
    return this.sent.map(s => s.msgType)
  }
}

function loopBack (lhs: FixDuplex, rhs: FixDuplex): void {
  lhs.writable.on('data', (data: Buffer) => {
    rhs.readable.push(data)
  })
}

interface IConnection {
  client: VerdictSession
  server: VerdictSession
  runs: Promise<any>
}

function connect (id: number = 1): IConnection {
  const clientConfig = makeSessionScope(setup.clientConfig, {})
  const serverConfig = makeSessionScope(setup.serverConfig, {})

  const clientDuplex = new StringDuplex('', StringDuplexTraits.None)
  const serverDuplex = new StringDuplex('', StringDuplexTraits.None)
  loopBack(clientDuplex, serverDuplex)
  loopBack(serverDuplex, clientDuplex)

  const client = new VerdictSession(clientConfig)
  const server = new VerdictSession(serverConfig)

  const runs = Promise.all([
    server.run(new MsgTransport(id, serverConfig, serverDuplex)).catch((e: Error) => e),
    client.run(new MsgTransport(id, clientConfig, clientDuplex)).catch((e: Error) => e)
  ])
  return { client, server, runs }
}

async function waitFor (predicate: () => boolean, what: string, timeoutMs = 5000): Promise<void> {
  const start = Date.now()
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`timed out waiting for ${what}`)
    }
    await new Promise<void>(resolve => { setTimeout(resolve, 5) })
  }
}

function loggedOn (session: VerdictSession): boolean {
  const state = session.getState()
  return state === SessionState.InitiationLogonResponse ||
    state === SessionState.InitiationLogonReceived ||
    state === SessionState.ActiveNormalSession
}

/** a promise the test hands to the session and settles when it chooses */
function deferred (): { promise: Promise<boolean>, settle: (v: boolean) => void, fail: (e: Error) => void } {
  let settle: (v: boolean) => void = () => {}
  let fail: (e: Error) => void = () => {}
  const promise = new Promise<boolean>((resolve, reject) => {
    settle = resolve
    fail = reject
  })
  return { promise, settle, fail }
}

describe('a synchronous verdict', () => {
  test('true logs the peer on, as it always has', async () => {
    const c = connect()
    await waitFor(() => loggedOn(c.server), 'server logon')
    await waitFor(() => loggedOn(c.client), 'client logon')

    expect(c.server.readyCount).toBe(1)
    expect(c.client.readyCount).toBe(1)
    expect(c.server.sentTypes()).toContain(MsgType.Logon)

    // the credentials really did reach the application
    expect(c.server.seenLogonAttempts.length).toBe(1)

    c.client.done()
    c.server.done()
    await c.runs
  })

  test('false from an acceptor refuses the peer instead of being ignored', async () => {
    const c = connect()
    c.server.verdict = () => false

    await waitFor(() => c.server.stopped, 'server stop')

    // #19: the handshake must not complete
    expect(c.server.readyCount).toBe(0)
    expect(c.server.getState()).toBe(SessionState.Stopped)
    expect(c.server.sentTypes()).not.toContain(MsgType.Logon)

    // the peer is told why rather than watching the socket go quiet
    expect(c.server.sentTypes()).toContain(MsgType.Logout)
    const logout = c.server.sent.find(s => s.msgType === MsgType.Logout)
    expect(logout?.txt).toContain('logon rejected by application')

    // and the application learns the outcome
    expect(c.server.stopError?.message).toContain('logon rejected by application')

    c.client.requestStop('peer refused the logon - test teardown')
    await c.runs
  })

  test('false from an initiator refuses the acceptor that answered', async () => {
    const c = connect()
    // the initiator's onLogon fires on the acceptor's logon response
    c.client.verdict = () => false

    await waitFor(() => c.client.stopped, 'client stop')

    expect(c.client.readyCount).toBe(0)
    expect(c.client.getState()).toBe(SessionState.Stopped)
    expect(c.client.sentTypes()).toContain(MsgType.Logout)

    c.server.requestStop('peer refused the logon response - test teardown')
    await c.runs
  })
})

describe('an asynchronous verdict', () => {
  test('resolving true completes the handshake once it arrives', async () => {
    const gate = deferred()
    const c = connect()
    c.server.verdict = async () => await gate.promise

    // the acceptor has read the logon and is waiting on the application
    await waitFor(() => c.server.seenLogonAttempts.length === 1, 'onLogon call')
    expect(c.server.readyCount).toBe(0)
    expect(c.server.sentTypes()).not.toContain(MsgType.Logon)

    gate.settle(true)

    await waitFor(() => loggedOn(c.server), 'server logon')
    await waitFor(() => loggedOn(c.client), 'client logon')
    expect(c.server.readyCount).toBe(1)
    expect(c.server.sentTypes()).toContain(MsgType.Logon)

    c.client.done()
    c.server.done()
    await c.runs
  })

  test('resolving false refuses the peer', async () => {
    const gate = deferred()
    const c = connect()
    c.server.verdict = async () => await gate.promise

    await waitFor(() => c.server.seenLogonAttempts.length === 1, 'onLogon call')
    expect(c.server.stopped).toBe(false)

    gate.settle(false)

    await waitFor(() => c.server.stopped, 'server stop')
    expect(c.server.readyCount).toBe(0)
    expect(c.server.sentTypes()).not.toContain(MsgType.Logon)
    expect(c.server.sentTypes()).toContain(MsgType.Logout)

    c.client.requestStop('peer refused the logon - test teardown')
    await c.runs
  })

  test('a rejected promise refuses the peer rather than letting it in', async () => {
    const gate = deferred()
    const c = connect()
    c.server.verdict = async () => await gate.promise

    await waitFor(() => c.server.seenLogonAttempts.length === 1, 'onLogon call')
    gate.fail(new Error('auth service unreachable'))

    await waitFor(() => c.server.stopped, 'server stop')
    expect(c.server.readyCount).toBe(0)
    expect(c.server.sentTypes()).not.toContain(MsgType.Logon)
    expect(c.server.stopError?.message).toContain('auth service unreachable')

    c.client.requestStop('logon check failed - test teardown')
    await c.runs
  })
})

test('messages riding in behind the logon are held and replayed in order', async () => {
  // Build the peer's traffic by hand so all of it lands in one push - this is the
  // case the queue exists for: one TCP segment holding Logon, TestRequest,
  // TestRequest, which the parser turns into three onMsg calls in a single
  // synchronous burst while the application is still deciding.
  const clientConfig = makeSessionScope(setup.clientConfig, {})
  const serverConfig = makeSessionScope(setup.serverConfig, {})

  const wire: Buffer[] = []
  const clientDuplex = new StringDuplex('', StringDuplexTraits.None)
  clientDuplex.writable.on('data', (data: Buffer) => {
    wire.push(Buffer.from(data))
  })
  const clientTransport = new MsgTransport(1, clientConfig, clientDuplex)
  const factory = clientConfig.factory
  expect(factory).toBeTruthy()
  if (!factory) return

  clientTransport.transmitter.send(MsgType.Logon, factory.logon())
  clientTransport.transmitter.send(MsgType.TestRequest, factory.testRequest('first'))
  clientTransport.transmitter.send(MsgType.TestRequest, factory.testRequest('second'))
  expect(wire.length).toBe(3)

  const gate = deferred()
  const serverDuplex = new StringDuplex('', StringDuplexTraits.None)
  const server = new VerdictSession(serverConfig)
  server.verdict = async () => await gate.promise
  const runs = server.run(new MsgTransport(1, serverConfig, serverDuplex)).catch((e: Error) => e)

  await waitFor(() => server.getState() === SessionState.WaitingForALogon, 'acceptor listening')
  serverDuplex.readable.push(Buffer.concat(wire))

  await waitFor(() => server.seenLogonAttempts.length === 1, 'onLogon call')
  // nothing may be acted on while the verdict is outstanding - no logon response,
  // and crucially no heartbeat answering a test request that arrived behind it
  expect(server.sent.length).toBe(0)

  gate.settle(true)
  await waitFor(() => server.sent.length >= 3, 'replayed traffic')

  // the logon response first, then the held test requests answered in the order
  // the peer sent them
  expect(server.sentTypes()).toEqual([MsgType.Logon, MsgType.Heartbeat, MsgType.Heartbeat])
  expect(server.sent[1].txt).toContain('first')
  expect(server.sent[2].txt).toContain('second')

  server.requestStop('test teardown')
  await runs
}, 20000)
