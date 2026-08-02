import 'reflect-metadata'
import * as net from 'net'
import { SessionContainer } from '../../runtime'
import { DITokens } from '../../runtime/di-tokens'
import { IJsFixConfig } from '../../config'
import { ISessionDescription } from '../../transport'
import { TcpAcceptor } from '../../transport/tcp/tcp-acceptor'
import { MsgTransport } from '../../transport/factory'

/**
 * Transport bookkeeping on the acceptor - the part of
 * https://github.com/TimelordUK/jspurefix/issues/153 that is below the session.
 *
 * Previously a transport was only harvested on the receiver's 'end' or 'error'.
 * A socket that died without a clean FIN (the reported case), or one this side
 * destroyed after a graceful close went unanswered, left an entry in the map for
 * the life of the process - each holding a parser, a transmit buffer and a session.
 */

async function makeAcceptorConfig (keepAliveMs?: number): Promise<IJsFixConfig> {
  const description: ISessionDescription = {
    application: {
      type: 'acceptor',
      name: 'lifecycle_test',
      protocol: 'ascii',
      dictionary: 'repo44',
      tcp: {
        host: '127.0.0.1',
        port: 0, // ephemeral - the OS picks a free port
        keepAliveMs
      }
    },
    EncryptMethod: 0,
    ResetSeqNumFlag: true,
    HeartBtInt: 30,
    SenderCompId: 'TEST_ACCEPTOR',
    TargetCompID: 'TEST_CLIENT',
    BeginString: 'FIX.4.4'
  } as unknown as ISessionDescription

  const fixContainer = new SessionContainer()
  fixContainer.registerGlobal('error')
  const sessionContainer = await fixContainer.makeSystem(description)
  return sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
}

async function waitFor (predicate: () => boolean, what: string, timeoutMs = 5000): Promise<void> {
  const start = Date.now()
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`timed out waiting for ${what}`)
    }
    await new Promise<void>(resolve => { setTimeout(resolve, 10) })
  }
}

interface IRunningAcceptor {
  acceptor: TcpAcceptor
  port: number
  transports: MsgTransport[]
  close: () => Promise<void>
}

async function listen (config: IJsFixConfig): Promise<IRunningAcceptor> {
  const acceptor = new TcpAcceptor(config)
  const transports: MsgTransport[] = []
  acceptor.on('transport', (t: MsgTransport) => { transports.push(t) })
  acceptor.listen()
  const server = (acceptor as any).server as net.Server
  await new Promise<void>(resolve => { server.once('listening', resolve) })
  const address = server.address()
  const port = typeof address === 'object' && address !== null ? address.port : 0
  return {
    acceptor,
    port,
    transports,
    close: async () => { await new Promise<void>(resolve => { acceptor.close(() => { resolve() }) }) }
  }
}

async function connectClient (port: number): Promise<net.Socket> {
  return await new Promise<net.Socket>((resolve, reject) => {
    const socket = net.connect(port, '127.0.0.1', () => { resolve(socket) })
    socket.on('error', reject)
  })
}

describe('acceptor transport lifecycle', () => {
  test('tracks concurrent connections and harvests each on close', async () => {
    const running = await listen(await makeAcceptorConfig())
    try {
      const one = await connectClient(running.port)
      const two = await connectClient(running.port)
      await waitFor(() => running.acceptor.transportCount === 2, 'two live transports')

      expect(running.transports).toHaveLength(2)
      expect(running.acceptor.liveTransports()).toHaveLength(2)

      // a client which disappears without a graceful shutdown still gets harvested,
      // because the acceptor listens for socket 'close' as well as receiver 'end'
      one.destroy()
      await waitFor(() => running.acceptor.transportCount === 1, 'one transport harvested')

      two.end()
      await waitFor(() => running.acceptor.transportCount === 0, 'both transports harvested')
    } finally {
      await running.close()
    }
  }, 20000)

  test('emits harvested with a reason', async () => {
    const running = await listen(await makeAcceptorConfig())
    const reasons: string[] = []
    running.acceptor.on('harvested', (_tid: number, reason: string) => { reasons.push(reason) })
    try {
      const socket = await connectClient(running.port)
      await waitFor(() => running.acceptor.transportCount === 1, 'one live transport')
      socket.destroy()
      await waitFor(() => reasons.length > 0, 'harvest reason')
      expect(reasons[0]).toMatch(/socket closed|peer ended/)
      // harvesting is idempotent - end, error and close can all fire for one socket
      expect(running.acceptor.transportCount).toBe(0)
    } finally {
      await running.close()
    }
  }, 20000)

  test('closing the listener releases connections instead of waiting for them', async () => {
    const previousLinger = MsgTransport.lingerMs
    MsgTransport.lingerMs = 50
    const running = await listen(await makeAcceptorConfig())
    try {
      const socket = await connectClient(running.port)
      socket.pause() // a peer that will not participate in a graceful close
      await waitFor(() => running.acceptor.transportCount === 1, 'one live transport')

      // net.Server.close waits for live connections, so before close() released them
      // this never came back
      await running.close()
      expect(running.acceptor.transportCount).toBe(0)
      socket.destroy()
    } finally {
      MsgTransport.lingerMs = previousLinger
    }
  }, 20000)

  test('keep-alive is on by default and can be turned off per listener', async () => {
    // node exposes no getter for the keep-alive delay, so assert the configuration
    // the acceptor acts on rather than the socket option itself
    expect(TcpAcceptor.defaultKeepAliveMs).toBeGreaterThan(0)

    const configured = await makeAcceptorConfig()
    expect(configured.description.application?.tcp?.keepAliveMs).toBeUndefined()

    const disabled = await makeAcceptorConfig(0)
    expect(disabled.description.application?.tcp?.keepAliveMs).toBe(0)
  }, 20000)

  test('a transport destroyed after a graceful end does not leak', async () => {
    const previousLinger = MsgTransport.lingerMs
    MsgTransport.lingerMs = 50
    const running = await listen(await makeAcceptorConfig())
    try {
      const socket = await connectClient(running.port)
      await waitFor(() => running.acceptor.transportCount === 1, 'one live transport')

      // simulate a half open peer: stop reading, then have the server side close.
      // The graceful end goes unanswered, so only the linger destroy releases it.
      socket.pause()
      running.transports[0].end()
      await waitFor(() => running.acceptor.transportCount === 0, 'transport released after linger')
    } finally {
      MsgTransport.lingerMs = previousLinger
      await running.close()
    }
  }, 20000)
})
