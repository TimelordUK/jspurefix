import { TcpDuplex } from '../duplex'
import { MsgTransport } from '../factory'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { createServer as netCreateServer, Server, Socket } from 'net'
import { createServer as tlsCreateServer, TlsOptions, TLSSocket } from 'tls'
import { TlsOptionsFactory } from './tls-options-factory'
import { describeNegotiated, describePeerCertificate, describeServerOptions } from './tls-diagnostics'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { makeSessionScope } from '../../runtime/session-scope'

@injectable()
export class TcpAcceptor extends FixAcceptor {
  private server: Server
  private readonly logger: IJsFixLogger
  private nextId: number = 0

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config.description.application ?? null)
    this.logger = config.logFactory.logger(`${config.description.application?.name}:TcpAcceptor`)
    const tlsOptions: TlsOptions | null = this.tlsOptions()
    if (tlsOptions) {
      this.tlsServer()
    } else {
      this.unsecureServer()
    }
    this.server.on('error', (err: Error) => {
      throw err
    })
  }

  getId (): number {
    this.nextId++
    return this.nextId
  }

  tlsServer (): void {
    try {
      const config: IJsFixConfig = this.config
      const tcp = this.config.description.application?.tcp
      const tlsOptions: TlsOptions | null = tcp?.tls ? TlsOptionsFactory.getTlsOptions(tcp.tls) : null
      this.logger.info('create tls server')
      if (!tlsOptions) return
      this.logger.info(`tls server options ${describeServerOptions(tlsOptions)}`)
      this.server = tlsCreateServer(tlsOptions, (tlsSocket: TLSSocket) => {
        if (tcp?.tls?.enableTrace) {
          this.logger.info('enabling tls session trace')
          tlsSocket.enableTrace()
        }
        this.logger.info(`tls negotiated ${describeNegotiated(tlsSocket)}`)
        this.logger.info(`tls peer certificate ${describePeerCertificate(tlsSocket)}`)
        // mirrors the initiator fix for #94 - an unauthorized peer is only fatal when the
        // caller has not explicitly opted out.  the default stays secure: rejectUnauthorized
        // undefined means reject, exactly as before.
        if (!tlsSocket.authorized && tlsOptions.rejectUnauthorized !== false) {
          this.logger.warning(`no transport created, unauthorized tls connection: ${String(tlsSocket.authorizationError)}`)
          tlsSocket.end()
          return
        }
        if (!tlsSocket.authorized) {
          this.logger.warning(`accepting unauthorized tls peer (rejectUnauthorized: false): ${String(tlsSocket.authorizationError)}`)
        }
        tlsSocket.setEncoding('utf8')
        const id: number = this.getId()
        this.logger.info(`tls creates session ${id} authorized ${tlsSocket.authorized}`)
        this.onSocket(id, tlsSocket, config)
      })
    } catch (e) {
      this.logger.error(e as Error)
      throw e
    }
  }

  unsecureServer (): void {
    try {
      const config = this.config
      this.logger.info('create unsecured server')
      this.server = netCreateServer((socket: Socket) => {
        const id: number = this.getId()
        this.logger.info(`net creates session ${id}`)
        socket.setNoDelay(true)
        this.onSocket(id, socket, config)
      })
    } catch (e) {
      this.logger.error(e as Error)
      throw e
    }
  }

  tlsOptions (): TlsOptions | null {
    const tcp = this.config.description.application?.tcp
    return tcp?.tls ? TlsOptionsFactory.getTlsOptions(tcp?.tls) : null
  }

  private onSocket (id: number, socket: Socket, config: IJsFixConfig): void {
    // Every accepted connection gets its own DI scope: its own parse and transmit
    // buffers, its own session description (hence its own SessionId and message
    // store) and its own session message factory.  Without this, concurrent clients
    // on one listener share buffers and collide on a single store.
    const sessionConfig = makeSessionScope(config)
    const remote = `${socket.remoteAddress ?? '?'}:${socket.remotePort ?? 0}`
    this.applyKeepAlive(id, socket)
    this.logger.info(`transport ${id} from ${remote} given its own session scope`)
    const transport: MsgTransport = new MsgTransport(id, sessionConfig, new TcpDuplex(socket))
    this.saveTransport(id, transport, remote)
    transport.receiver.on('end', () => {
      this.harvestTransport(id, 'peer ended the connection')
    })
    transport.receiver.on('error', (e: Error) => {
      this.logger.error(e)
      this.harvestTransport(id, `receiver error: ${e.message}`)
    })
    // 'end' only fires on a clean FIN.  A socket dropped by a firewall, or one this
    // side destroyed after a failed graceful close, arrives here instead - without
    // it the transport would sit in the map forever.
    socket.on('close', (hadError: boolean) => {
      this.harvestTransport(id, hadError ? 'socket closed after error' : 'socket closed')
    })
  }

  /**
   * TCP keep-alive is the only mechanism that detects a peer which has vanished
   * without sending FIN or RST - the half open socket described in issue #153.  The
   * session level TestRequest timeout is the protocol level backstop; this is the
   * transport level one.
   */
  private applyKeepAlive (id: number, socket: Socket): void {
    const configured = this.config.description.application?.tcp?.keepAliveMs
    const keepAliveMs = configured ?? TcpAcceptor.defaultKeepAliveMs
    if (keepAliveMs <= 0) {
      this.logger.info(`transport ${id} keep-alive disabled`)
      return
    }
    socket.setKeepAlive(true, keepAliveMs)
    this.logger.info(`transport ${id} keep-alive enabled, initial delay ${keepAliveMs}ms`)
  }

  public static defaultKeepAliveMs: number = 30000

  public listen (): void {
    const port = this.config.description.application?.tcp?.port
    this.logger.info(`start to listen ${port}`)
    this.server.on('connection', () => {
      this.logger.info('insecure connection established')
    })
    this.server.on('secureConnection', (s) => {
      this.logger.info(`secure connection; client authorized: ${s.authorized}`)
    })
    this.server.listen(port)
  }

  public close (callback?: (err?: Error) => void): void {
    const port = this.config.description.application?.tcp?.port ?? -1
    this.logger.info(`close listener on port ${port} with ${this.transportCount} live transport(s)`)
    // Server.close only stops accepting - it waits for existing connections to go.
    // Release them, otherwise a shutdown blocks on whichever counterparty happens to
    // be connected (and forever on one that is half open).
    Object.keys(this.transports).forEach(id => {
      const tid = Number(id)
      this.logger.info(`close: releasing transport ${tid}`)
      this.transports[tid]?.end()
    })
    this.server.close(callback)
  }

  /** how many connections this listener currently holds */
  public get transportCount (): number {
    return Object.keys(this.transports).length
  }

  /** ids of the live transports, for a periodic census in the application log */
  public liveTransports (): string[] {
    return Object.keys(this.transports).map(id => {
      const meta = this.accepted[id as any]
      const age = meta ? Math.round((Date.now() - meta.at) / 1000) : -1
      return `${id}@${meta?.remote ?? '?'} up ${age}s`
    })
  }

  private readonly accepted: Record<number, { remote: string, at: number }> = {}

  private saveTransport (tid: number, transport: MsgTransport, remote: string): void {
    this.transports[tid] = transport
    this.accepted[tid] = { remote, at: Date.now() }
    this.logger.info(`new transport id = ${tid} from ${remote} created total transports = ${this.transportCount}`)
    this.emit('transport', transport)
  }

  private harvestTransport (tid: number, reason: string): void {
    if (!this.transports[tid]) return
    const meta = this.accepted[tid]
    const lifetime = meta ? Math.round((Date.now() - meta.at) / 1000) : -1
    delete this.transports[tid]
    delete this.accepted[tid]
    this.logger.info(`transport ${tid} from ${meta?.remote ?? '?'} harvested after ${lifetime}s ` +
      `(${reason}) total transports = ${this.transportCount}`)
    this.emit('harvested', tid, reason)
  }
}
