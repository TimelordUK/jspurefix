import 'reflect-metadata'

import * as net from 'net'
import { SessionLauncher } from '../../runtime/session-launcher'
import { EngineFactory } from '../../runtime/engine-factory'
import { EmptyLogFactory, IJsFixConfig } from '../../config'
import { AsciiSession, ISessionDescription } from '../../transport'
import { MsgView } from '../../buffer'

/**
 * Closing an acceptor's listener.
 *
 * An acceptor keeps listening after a session ends, which is what a venue wants and
 * why TcpAcceptorListener.stop() is not called on its own.  But nothing exposed that
 * stop to the application: SessionLauncher only reached it from the branch where one
 * launcher holds both roles, so an application which gives its acceptor a launcher of
 * its own - the usual arrangement for more than one client - could not close the
 * listener at all.  Every session would log out, every transport would be harvested,
 * and the process would still sit there held open by the listening socket.
 */

/** logs on, does nothing, and schedules no timers of its own */
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

class AcceptorLauncher extends SessionLauncher {
  constructor (description: ISessionDescription) {
    // the probe connections below are deliberately rude - they connect and vanish
    // without a Logon - so keep their (correct, and loud) session errors out of the
    // test output
    super(null, description, new EmptyLogFactory())
  }

  protected override makeFactory (_config: IJsFixConfig): EngineFactory {
    return {
      makeSession: (sessionConfig: IJsFixConfig) => new QuietSession(sessionConfig)
    } as EngineFactory
  }
}

function acceptorDescription (port: number): ISessionDescription {
  return {
    application: {
      type: 'acceptor',
      name: 'launcher_stop_test',
      protocol: 'ascii',
      dictionary: 'repo44',
      tcp: { host: '127.0.0.1', port }
    },
    EncryptMethod: 0,
    ResetSeqNumFlag: true,
    HeartBtInt: 30,
    SenderCompId: 'TEST_ACCEPTOR',
    TargetCompID: 'TEST_CLIENT',
    BeginString: 'FIX.4.4'
  } as unknown as ISessionDescription
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

async function connects (port: number): Promise<boolean> {
  return await new Promise<boolean>(resolve => {
    const socket = net.connect(port, '127.0.0.1', () => {
      socket.destroy()
      resolve(true)
    })
    socket.once('error', () => {
      socket.destroy()
      resolve(false)
    })
  })
}

async function delay (ms: number): Promise<void> {
  await new Promise<void>(resolve => { setTimeout(resolve, ms) })
}

async function waitUntilListening (port: number, timeoutMs = 10000): Promise<void> {
  const start = Date.now()
  while (!(await connects(port))) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`timed out waiting for a listener on ${port}`)
    }
    await delay(10)
  }
}

describe('stopping an acceptor only launcher', () => {
  test('the listener closes and run() resolves', async () => {
    const port = await freePort()
    const launcher = new AcceptorLauncher(acceptorDescription(port))

    let finished = false
    const run = launcher.run().then(() => { finished = true })
    await waitUntilListening(port)

    // the acceptor is doing exactly what it should: run() has not resolved, because a
    // listener with no clients is still a listener
    expect(finished).toBe(false)

    launcher.stop()
    await run

    expect(finished).toBe(true)
    expect(await connects(port)).toBe(false)
  }, 30000)

  test('a stop before the listener opens is honoured, not lost', async () => {
    const port = await freePort()
    const launcher = new AcceptorLauncher(acceptorDescription(port))

    // makeSystem is async, so this lands while the container is still being built -
    // the window in which the acceptor entity does not exist yet
    const run = launcher.run()
    launcher.stop()
    await run

    expect(await connects(port)).toBe(false)
  }, 30000)

  test('stop is idempotent', async () => {
    const port = await freePort()
    const launcher = new AcceptorLauncher(acceptorDescription(port))
    const run = launcher.run()
    await waitUntilListening(port)

    launcher.stop()
    launcher.stop()
    await run

    expect(await connects(port)).toBe(false)
  }, 30000)
})
