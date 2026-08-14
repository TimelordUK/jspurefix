import 'reflect-metadata'

import * as net from 'net'
import * as path from 'path'
import { DependencyContainer } from 'tsyringe'
import { SessionLauncher } from '../../runtime/session-launcher'
import { EngineFactory } from '../../runtime/engine-factory'
import { DITokens } from '../../runtime/di-tokens'
import { EmptyLogFactory, IJsFixConfig } from '../../config'
import { AsciiSession, ISessionDescription } from '../../transport'
import { FixEntity } from '../../transport/fix-entity'
import { RecoveringTcpInitiator } from '../../transport/tcp/recovering-tcp-initiator'
import { TcpInitiatorConnector } from '../../transport/tcp/tcp-initiator-connector'
import { MsgView } from '../../buffer'

/**
 * The retry policy of an initiator.
 *
 * `resilient` picks the initiator that re-establishes a lost transport, and its
 * timings used to live in fields nothing ever wrote:
 *
 *   public recoveryAttemptSecs: number = 5
 *   public backoffFailConnectSecs: number = 30
 *
 * with the connect timeout hard coded at the call sites (60 here, 22 in the plain
 * connector).  So an application could not say how hard or how long to try without
 * subclassing the launcher and poking the resolved instance - which is what
 * https://github.com/TimelordUK/jspurefix/issues/72 was about.
 */

const initiatorTemplate: ISessionDescription =
  require(path.join(__dirname, '../../../data/session/test-initiator.json'))

const acceptorTemplate: ISessionDescription =
  require(path.join(__dirname, '../../../data/session/test-acceptor.json'))

/** logs on, does nothing, and records when it became ready */
class QuietSession extends AsciiSession {
  public readyCount: number = 0

  constructor (config: IJsFixConfig) {
    super(config)
    this.heartbeat = false
  }

  protected onApplicationMsg (_msgType: string, _view: MsgView): void {}
  protected onDecoded (_msgType: string, _txt: string): void {}
  protected onEncoded (_msgType: string, _txt: string): void {}
  protected onReady (_view: MsgView): void {
    this.readyCount++
  }

  protected onStopped (_error?: Error): void {}
  protected onLogon (_view: MsgView, _user: string, _password: string): boolean {
    return true
  }
}

/**
 * Builds the initiator exactly as an application would, then stops short of
 * connecting - the entity is the subject here, not the socket.
 */
class CapturingLauncher extends SessionLauncher {
  public entity: FixEntity | null = null

  constructor (description: ISessionDescription) {
    super(description, null, new EmptyLogFactory())
  }

  protected override makeFactory (_config: IJsFixConfig): EngineFactory {
    return {
      makeSession: (sessionConfig: IJsFixConfig) => new QuietSession(sessionConfig)
    }
  }

  protected override async getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    this.entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
    return null
  }
}

function initiatorDescription (application: Record<string, any>): ISessionDescription {
  return {
    ...initiatorTemplate,
    application: {
      ...initiatorTemplate.application,
      ...application
    }
  } as ISessionDescription
}

async function initiatorFrom (application: Record<string, any>): Promise<FixEntity> {
  const launcher = new CapturingLauncher(initiatorDescription(application))
  await launcher.run()
  expect(launcher.entity).toBeTruthy()
  return launcher.entity!
}

test('a resilient initiator takes its retry policy from the session description', async () => {
  const entity = await initiatorFrom({
    resilient: true,
    connectTimeoutSeconds: 12,
    recoveryAttemptSeconds: 2,
    backoffFailConnectSeconds: 7
  })

  expect(entity).toBeInstanceOf(RecoveringTcpInitiator)
  const initiator = entity as RecoveringTcpInitiator
  expect(initiator.connectTimeoutSecs).toBe(12)
  expect(initiator.recoveryAttemptSecs).toBe(2)
  expect(initiator.backoffFailConnectSecs).toBe(7)
})

test('a resilient initiator keeps its old defaults when the description says nothing', async () => {
  const entity = await initiatorFrom({ resilient: true })

  const initiator = entity as RecoveringTcpInitiator
  expect(initiator.connectTimeoutSecs).toBe(RecoveringTcpInitiator.DefaultConnectTimeoutSecs)
  expect(initiator.recoveryAttemptSecs).toBe(RecoveringTcpInitiator.DefaultRecoveryAttemptSecs)
  expect(initiator.backoffFailConnectSecs).toBe(RecoveringTcpInitiator.DefaultBackoffFailConnectSecs)
  // the values the engine has always used - this test exists to keep them that way
  expect(initiator.connectTimeoutSecs).toBe(60)
  expect(initiator.recoveryAttemptSecs).toBe(5)
  expect(initiator.backoffFailConnectSecs).toBe(30)
})

test('resilient false still gives the single connection initiator', async () => {
  const entity = await initiatorFrom({ resilient: false })
  expect(entity).toBeInstanceOf(TcpInitiatorConnector)
})

test('a plain initiator takes its connect timeout from the session description', async () => {
  const entity = await initiatorFrom({ connectTimeoutSeconds: 9 })

  expect(entity).toBeInstanceOf(TcpInitiatorConnector)
  expect((entity as TcpInitiatorConnector).connectTimeoutSecs).toBe(9)
})

test('a plain initiator keeps its old default when the description says nothing', async () => {
  const entity = await initiatorFrom({})

  const connector = entity as TcpInitiatorConnector
  expect(connector.connectTimeoutSecs).toBe(TcpInitiatorConnector.DefaultConnectTimeoutSecs)
  expect(connector.connectTimeoutSecs).toBe(22)
})

/** counts the sessions handed out - one per accepted connection */
class CountingAcceptorLauncher extends SessionLauncher {
  public readonly sessions: QuietSession[] = []

  constructor (description: ISessionDescription) {
    super(null, description, new EmptyLogFactory())
  }

  protected override makeFactory (_config: IJsFixConfig): EngineFactory {
    return {
      makeSession: (sessionConfig: IJsFixConfig) => {
        const session = new QuietSession(sessionConfig)
        this.sessions.push(session)
        return session
      }
    }
  }
}

class RealInitiatorLauncher extends SessionLauncher {
  public readonly sessions: QuietSession[] = []

  constructor (description: ISessionDescription) {
    super(description, null, new EmptyLogFactory())
  }

  protected override makeFactory (_config: IJsFixConfig): EngineFactory {
    return {
      makeSession: (sessionConfig: IJsFixConfig) => {
        const session = new QuietSession(sessionConfig)
        this.sessions.push(session)
        return session
      }
    }
  }
}

function acceptorDescription (port: number): ISessionDescription {
  return {
    ...acceptorTemplate,
    application: {
      ...acceptorTemplate.application,
      tcp: { host: '127.0.0.1', port }
    }
  } as ISessionDescription
}

/** a free port, discovered by binding one and giving it straight back */
async function freePort (): Promise<number> {
  return await new Promise<number>((resolve, reject) => {
    const probe = net.createServer()
    probe.once('error', reject)
    probe.listen(0, '127.0.0.1', () => {
      const address = probe.address()
      const port = typeof address === 'object' && address !== null ? address.port : 0
      probe.close(() => { resolve(port) })
    })
  })
}

async function waitFor (predicate: () => boolean, what: string, timeoutMs = 15000): Promise<void> {
  const start = Date.now()
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`timed out waiting for ${what}`)
    }
    await new Promise<void>(resolve => { setTimeout(resolve, 20) })
  }
}

test('a resilient initiator gets its transport back on the configured schedule', async () => {
  const port = await freePort()

  const acceptor = new CountingAcceptorLauncher(acceptorDescription(port))
  const acceptorRun = acceptor.run().catch((e: Error) => e)
  await waitFor(() => acceptor.sessions.length >= 0, 'acceptor start')

  const initiator = new RealInitiatorLauncher(initiatorDescription({
    resilient: true,
    connectTimeoutSeconds: 10,
    recoveryAttemptSeconds: 1,
    reconnectSeconds: 1,
    tcp: { host: '127.0.0.1', port }
  }))
  const initiatorRun = initiator.run().catch((e: Error) => e)

  await waitFor(() => acceptor.sessions.length === 1 && acceptor.sessions[0].readyCount === 1,
    'first session logged on')

  // the counterparty vanishes - the sort of thing resilient exists for
  acceptor.sessions[0].requestStop('simulating a dropped connection')

  // recoveryAttemptSeconds is 1, so a second connection should be accepted well inside
  // the default 5 this test would otherwise have had to wait for
  await waitFor(() => acceptor.sessions.length === 2 && acceptor.sessions[1].readyCount === 1,
    'reconnect and second logon')

  // and it is the same session object throughout - the point of a resilient initiator
  // is that the session survives the transport
  expect(initiator.sessions.length).toBe(1)
  expect(initiator.sessions[0].readyCount).toBe(2)

  // and it can be called off - before this, losing the transport always scheduled
  // another attempt, so a resilient initiator held the process open for good
  initiator.stop()
  acceptor.stop()
  await Promise.all([acceptorRun, initiatorRun])
}, 40000)

test('a resilient initiator gives up when the launcher is stopped', async () => {
  const port = await freePort()

  // nothing is listening on this port, so the initiator can only sit in its retry
  // loop - which is exactly the state that used to be impossible to leave
  const initiator = new RealInitiatorLauncher(initiatorDescription({
    resilient: true,
    connectTimeoutSeconds: 5,
    recoveryAttemptSeconds: 1,
    reconnectSeconds: 1,
    tcp: { host: '127.0.0.1', port }
  }))

  let settled = false
  const run = initiator.run().catch((e: Error) => e).then(r => {
    settled = true
    return r
  })

  await new Promise<void>(resolve => { setTimeout(resolve, 500) })
  expect(settled).toBe(false)

  initiator.stop()
  await waitFor(() => settled, 'run to settle after stop', 10000)
}, 30000)
