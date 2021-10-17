import { TcpDuplex } from '../duplex'
import { MsgTransport } from '../msg-transport'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { getTlsOptions } from './tls-options'
import { createServer as netCreateServer, Socket, Server } from 'net'
import { createServer as tlsCreateServer, TLSSocket, TlsOptions } from 'tls'

export class TcpAcceptor extends FixAcceptor {
  private server: Server
  private logger: IJsFixLogger
  private nextId: number = 0

  constructor (public readonly config: IJsFixConfig) {
    super(config.description.application)
    this.logger = config.logFactory.logger(`${config.description.application.name}:TcpAcceptor`)
    const tlsOptions: TlsOptions = this.tlsOptions()
    if (tlsOptions) {
      this.tlsServer()
    } else {
      this.unsecureServer()
    }
    this.server.on('error', ((err: Error) => {
      throw err
    }))
  }

  getId (): number {
    this.nextId++
    const id: number = this.nextId
    return id
  }

  tlsServer (): void {
    try {
      const config: IJsFixConfig = this.config
      const tcp = this.config.description.application.tcp
      const tlsOptions: TlsOptions = getTlsOptions(tcp.tls)
      this.logger.info(`create tls server`)
      this.server = tlsCreateServer(tlsOptions, (tlsSocket: TLSSocket) => {
        if (tcp.tls.enableTrace) {
          this.logger.info(`enabling tls session trace`)
          tlsSocket.enableTrace()
        }
        if (tlsSocket.authorized) {
          tlsSocket.setEncoding('utf8')
          const id: number = this.getId()
          this.logger.info(`tls creates session ${id} ${tlsSocket.authorized}`)
          this.onSocket(id, tlsSocket, config)
        } else {
          this.logger.info(`no transport created on tls with no authorized connection`)
        }
      })
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  unsecureServer () {
    try {
      const config = this.config
      this.logger.info(`create unsecured server`)
      this.server = netCreateServer((socket: Socket) => {
        const id: number = this.getId()
        this.logger.info(`net creates session ${id} }`)
        socket.setNoDelay(true)
        this.onSocket(id, socket, config)
      })
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  tlsOptions (): TlsOptions {
    const tcp = this.config.description.application.tcp
    const tlsOptions: TlsOptions = getTlsOptions(tcp.tls)
    return tlsOptions
  }

  private onSocket (id: number, socket: Socket, config: IJsFixConfig) {
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
    const port = this.config.description.application.tcp.port
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
    const port = this.config.description.application.tcp.port
    this.logger.info(`close listener on port ${port}`)
    this.server.close(callback)
  }

  private saveTransport (tid: number, transport: MsgTransport) {
    this.transports[tid] = transport
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`new transport id = ${tid} created total transports = ${keys.length}`)
    this.emit('transport', transport)
  }

  private harvestTransport (tid: number) {
    delete this.transports[tid]
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`transport ${tid} ends total transports = ${keys.length}`)
  }
}
