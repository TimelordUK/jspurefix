import * as net from 'net'
import { MsgTransport } from '../msg-transport'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { TcpDuplex } from './tcp-duplex'

export class TcpAcceptor extends FixAcceptor {
  private server: net.Server
  private logger: IJsFixLogger
  constructor (public readonly config: IJsFixConfig) {
    super(config.description.application)
    this.logger = config.logFactory.logger(`${config.description.application.name}:TcpAcceptor`)
    let nextId: number = 0
    this.logger.info('creating server')
    this.server = net.createServer((socket: net.Socket) => {
      socket.setNoDelay(true)
      const id: number = nextId++
      const transport: MsgTransport = new MsgTransport(id, config, new TcpDuplex(socket))
      this.saveTransport(id, transport)
      transport.receiver.on('end', () => {
        this.harvestTransport(id)
      })
      transport.receiver.on('error', (e: Error) => {
        this.logger.error(e)
        this.harvestTransport(id)
      })
    })
    this.server.on('error', ((err: Error) => {
      throw err
    }))
  }

  public listen (): void {
    const port = this.config.description.application.tcp.port
    this.logger.info(`start to listen ${port}`)
    this.server.listen(port)
  }

  public close (cb: Function): void {
    const port = this.config.description.application.tcp.port
    this.logger.info(`close listener on port ${port}`)
    this.server.close(cb)
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
