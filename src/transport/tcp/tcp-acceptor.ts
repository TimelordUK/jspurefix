import { TcpDuplex } from '../duplex'
import { MsgTransport } from '../factory'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { createServer as netCreateServer, Server, Socket } from 'net'
import { createServer as tlsCreateServer, TlsOptions, TLSSocket } from 'tls'
import { TlsOptionsFactory } from './tls-options-factory'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

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
      this.server = tlsCreateServer(tlsOptions, (tlsSocket: TLSSocket) => {
        if (tcp?.tls?.enableTrace) {
          this.logger.info('enabling tls session trace')
          tlsSocket.enableTrace()
        }
        if (tlsSocket.authorized) {
          tlsSocket.setEncoding('utf8')
          const id: number = this.getId()
          this.logger.info(`tls creates session ${id} ${tlsSocket.authorized}`)
          this.onSocket(id, tlsSocket, config)
        } else {
          this.logger.info('no transport created on tls with no authorized connection')
        }
      })
    } catch (e) {
      this.logger.error(e)
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
      this.logger.error(e)
      throw e
    }
  }

  tlsOptions (): TlsOptions | null {
    const tcp = this.config.description.application?.tcp
    return tcp?.tls ? TlsOptionsFactory.getTlsOptions(tcp?.tls) : null
  }

  private onSocket (id: number, socket: Socket, config: IJsFixConfig): void {
    const transport: MsgTransport = new MsgTransport(id, config, new TcpDuplex(socket))
    this.saveTransport(id, transport)
    transport.receiver.on('end', () => {
      this.harvestTransport(id)
    })
    transport.receiver.on('error', (e: Error) => {
      this.logger.error(e)
      this.harvestTransport(id)
    })
  }

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
    this.logger.info(`close listener on port ${port}`)
    this.server.close(callback)
  }

  private saveTransport (tid: number, transport: MsgTransport): void {
    this.transports[tid] = transport
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`new transport id = ${tid} created total transports = ${keys.length}`)
    this.emit('transport', transport)
  }

  private harvestTransport (tid: number): void {
    delete this.transports[tid]
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`transport ${tid} ends total transports = ${keys.length}`)
  }
}
