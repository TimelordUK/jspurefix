import 'reflect-metadata'

import { Setup } from '../env/setup'
import { makeSessionScope } from '../../runtime/session-scope'
import { SessionRegistry } from '../../transport/session/session-registry'
import { MsgTransport } from '../../transport/factory'
import { FixDuplex, StringDuplex, StringDuplexTraits } from '../../transport'
import { AsciiSession } from '../../transport/ascii/ascii-session'
import { SessionState } from '../../transport/session/session-state'
import { IJsFixConfig } from '../../config'
import { SessionId } from '../../store'
import { MsgView } from '../../buffer'

/**
 * An acceptor configured with TargetCompID '*' serves counterparties it was not
 * statically configured for: the peer's SenderCompID from the Logon becomes the
 * acceptor's TargetCompID, and therefore its SessionId, message store and registry
 * key.  This is what lets one listener host many clients, which is the second half
 * of https://github.com/TimelordUK/jspurefix/issues/153.
 *
 * cspurefix builds the SessionId in the constructor and so keys a wildcard session's
 * store on the literal '*' - fine for memory stores, wrong for a persisted
 * multi-client acceptor.  Here the identity derived state is built after the Logon
 * arrives instead.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

/**
 * The smallest possible session - it logs on and then does nothing.  Deliberately
 * not SkeletonSession, which schedules its own logout timer and would keep the
 * event loop alive past the assertions.
 */
class QuietSession extends AsciiSession {
  constructor (config: IJsFixConfig) {
    super(config)
    this.heartbeat = false
  }

  protected onApplicationMsg (_msgType: string, _view: MsgView): void {}
  protected onDecoded (_msgType: string, _txt: string): void {}
  protected onEncoded (_msgType: string, _txt: string): void {}
  protected onReady (_view: MsgView): void {}
  protected onStopped (_error?: Error): void {}
  protected onLogon (_view: MsgView, _user: string, _password: string): boolean {
    return true
  }
}

function loopBack (lhs: FixDuplex, rhs: FixDuplex): void {
  lhs.writable.on('data', (data: Buffer) => {
    rhs.readable.push(data)
  })
}

interface IConnection {
  client: QuietSession
  server: QuietSession
  runs: Promise<any>
}

function connect (clientConfig: IJsFixConfig, serverConfig: IJsFixConfig, id: number): IConnection {
  const clientDuplex = new StringDuplex('', StringDuplexTraits.None)
  const serverDuplex = new StringDuplex('', StringDuplexTraits.None)
  loopBack(clientDuplex, serverDuplex)
  loopBack(serverDuplex, clientDuplex)

  const client = new QuietSession(clientConfig)
  const server = new QuietSession(serverConfig)

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

function loggedOn (session: QuietSession): boolean {
  const state = session.getState()
  return state === SessionState.InitiationLogonResponse ||
    state === SessionState.InitiationLogonReceived ||
    state === SessionState.ActiveNormalSession
}

/** sessionId is protected - the test is asserting engine internals deliberately */
function sessionIdOf (session: QuietSession): SessionId {
  return (session as any).sessionId as SessionId
}

function wildcardServerConfig (registry: SessionRegistry): IJsFixConfig {
  const config = makeSessionScope(setup.serverConfig, { TargetCompID: AsciiSession.WildcardCompId })
  config.sessionRegistry = registry
  return config
}

test('a wildcard acceptor takes its identity from the peer Logon', async () => {
  const registry = new SessionRegistry()
  const serverConfig = wildcardServerConfig(registry)
  const clientConfig = makeSessionScope(setup.clientConfig, { SenderCompId: 'client-one' })

  const c = connect(clientConfig, serverConfig, 1)
  await waitFor(() => loggedOn(c.server), 'server logon')

  expect(serverConfig.description.TargetCompID).toBe('client-one')
  expect(sessionIdOf(c.server).toString()).toBe('FIX.4.4-accept-comp-client-one')
  expect(registry.count).toBe(1)
  expect(registry.keys()).toEqual(['FIX.4.4-accept-comp-client-one'])

  // the client accepted the acceptor's logon response, so the response carried the
  // freshly bound comp ids in its header
  await waitFor(() => loggedOn(c.client), 'client logon')

  c.client.done()
  c.server.done()
  await c.runs
})

test('two counterparties on one wildcard acceptor get separate identities', async () => {
  const registry = new SessionRegistry()

  const serverOne = wildcardServerConfig(registry)
  const serverTwo = wildcardServerConfig(registry)
  const clientOne = makeSessionScope(setup.clientConfig, { SenderCompId: 'alpha-client' })
  const clientTwo = makeSessionScope(setup.clientConfig, { SenderCompId: 'beta-client' })

  const a = connect(clientOne, serverOne, 1)
  const b = connect(clientTwo, serverTwo, 2)

  await waitFor(() => loggedOn(a.server) && loggedOn(b.server), 'both servers logon')

  expect(sessionIdOf(a.server).toString()).toBe('FIX.4.4-accept-comp-alpha-client')
  expect(sessionIdOf(b.server).toString()).toBe('FIX.4.4-accept-comp-beta-client')

  // both live at once - no cross talk, no shared SessionId
  expect(registry.count).toBe(2)
  expect(registry.keys().sort()).toEqual([
    'FIX.4.4-accept-comp-alpha-client',
    'FIX.4.4-accept-comp-beta-client'
  ])

  // and each scope kept its own description
  expect(serverOne.description.TargetCompID).toBe('alpha-client')
  expect(serverTwo.description.TargetCompID).toBe('beta-client')
  expect(setup.serverConfig.description.TargetCompID).not.toBe('alpha-client')

  a.client.done(); a.server.done()
  b.client.done(); b.server.done()
  await Promise.all([a.runs, b.runs])
})

test('the same counterparty reconnecting displaces its wildcard session', async () => {
  const registry = new SessionRegistry()

  const first = connect(
    makeSessionScope(setup.clientConfig, { SenderCompId: 'flappy-client' }),
    wildcardServerConfig(registry), 1)
  await waitFor(() => loggedOn(first.server), 'first server logon')
  expect(registry.count).toBe(1)

  // the socket of connection one is half open - node has not noticed.  The peer
  // reconnects and logs on again.
  const second = connect(
    makeSessionScope(setup.clientConfig, { SenderCompId: 'flappy-client' }),
    wildcardServerConfig(registry), 2)
  await waitFor(() => loggedOn(second.server), 'second server logon')

  expect(registry.count).toBe(1)
  expect(first.server.getState()).toBe(SessionState.Stopped)
  expect(second.server.getState()).not.toBe(SessionState.Stopped)

  // the loop back duplex does not propagate a close, so connection one's client
  // never learns its peer is gone.  A graceful done() would sit in
  // WaitingLogoutConfirm forever, so stop it outright.
  first.client.requestStop('peer session was replaced - test teardown')
  second.client.done(); second.server.done()
  await Promise.all([first.runs, second.runs])
}, 20000)

test('a wildcard TargetCompID is rejected for an initiator', () => {
  const config = makeSessionScope(setup.clientConfig, { TargetCompID: AsciiSession.WildcardCompId })
  expect(() => new QuietSession(config)).toThrow(/only valid for acceptors/)
})
