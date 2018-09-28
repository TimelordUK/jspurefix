import { MsgTransport } from '../msg-transport'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import * as express from 'express'
import * as http from 'http'

export class HttpAcceptor extends FixAcceptor {
  private app: express.Express = express()
  private server: http.Server
  private logger: IJsFixLogger
  private router: express.Router
  constructor (public readonly config: IJsFixConfig) {
    super(config.description.application)
    this.logger = config.logFactory.logger(`${config.description.application.name}:HttpAcceptor`)
    let nextId: number = 0
    this.router = express.Router()
    this.subscribe()
    this.app.use('/acceptor', this.app)
    this.logger.info('creating http server')
    this.server.on('error', ((err: Error) => {
      throw err
    }))
  }

  public listen (): void {
    const port = this.config.description.application.tcp.port
    this.logger.info(`start to listen ${port}`)
    this.server = this.app.listen(port, () => {
      const address = this.server.address()
      this.logger.info(`app listening at http://${address}`)
    })
  }

  public close (cb: Function): void {
    const port = this.config.description.application.tcp.port
    this.logger.info(`close listener on port ${port}`)
    this.server.close(cb)
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

  private subscribe (): void {
    const router = this.router
    router.get('/logon/:id', (req, res) => {
      // check hand back session key
    })
  }
}
