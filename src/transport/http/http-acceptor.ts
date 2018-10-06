import { MsgTransport } from '../msg-transport'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { IFixmlRequest } from '../fixml/fixml-request'
import { StringDuplex } from '../duplex/string-duplex'
import { Dictionary } from '../../collections/dictionary'
import { FixDuplex } from '../duplex/fix-duplex'

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as http from 'http'

const uuidv3 = require('uuid/v3')

export class HttpAcceptor extends FixAcceptor {
  private app: express.Express = express()
  private server: http.Server
  private readonly logger: IJsFixLogger
  private readonly router: express.Router
  private nextId: number = 0
  private keys: Dictionary<MsgTransport> = new Dictionary()

  constructor (public readonly config: IJsFixConfig) {
    super(config.description.application)
    this.logger = config.logFactory.logger(`${config.description.application.name}:HttpAcceptor`)
    this.logger.info('creating http server')
    this.router = express.Router()
    this.router.use(bodyParser.json())
    this.subscribe()
    this.app.use('/', this.router)
  }

  public listen (): void {
    const app = this.config.description.application
    const port = app.http.port
    const logger = this.logger
    logger.info(`start to listen ${port}`)
    this.server = this.app.listen(port, () => {
      logger.info(`app listening at http://localhost:${port}${app.http.uri}`)
    })
    this.server.on('error', ((err: Error) => {
      logger.error(err)
      this.emit('error', err)
    }))
  }

  public close (cb: Function): void {
    const port = this.config.description.application.tcp.port
    this.logger.info(`close listener on port ${port}`)
    this.server.close(cb)
  }

  private saveTransport (tid: number, transport: MsgTransport): string {
    this.transports[tid] = transport
    const app = this.config.description.application
    const keys: string[] = Object.keys(this.transports)
    const a = uuidv3(app.http.uri, uuidv3.URL)
    this.keys.addUpdate(a, transport)
    this.logger.info(`new transport id = ${tid} token = ${a} created total transports = ${keys.length}`)
    this.emit('transport', transport)
    return a
  }

  private harvestTransport (tid: number): void {
    delete this.transports[tid]
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`transport ${tid} ends total transports = ${keys.length}`)
  }

  private respond (duplex: FixDuplex, res: express.Response, token: string = null) {
    res.setHeader('Content-Type', 'application/json')
    const timer = setTimeout(() => {
      const businessReject = `<FIXML>
	<BizMsgRej BizRejRsn="4" Txt="no response from application"/>
</FIXML>`
      const b = Buffer.from(businessReject, 'utf-8')
      res.send(b)
    }, 5000)
    duplex.writable.on('data', (d) => {
      this.logger.info('responding to request')
      clearTimeout(timer)
      if (token) {
        res.setHeader('authorization', token)
      }
      res.send(d)
    })
  }

  private logon (req: express.Request, res: express.Response) {
    const body: IFixmlRequest = req.body
    const id = this.nextId++
    this.logger.info(JSON.stringify(body, null,4))
    // check hand back session key
    const d = new StringDuplex()
    const transport = new MsgTransport(id, this.config, d)
    const token = this.saveTransport(id, transport)
    this.respond(d, res, token)
    d.readable.push(body.fixml)
  }

  private subscribe (): void {
    const router = this.router
    const app = this.config.description.application
    const root = app.http.uri
    const authorise = `${root}authorise`
    const query = `${root}query`
    this.logger.info(`uri: authorise ${authorise}, query ${query}`)
    router.post(authorise, (req: express.Request, res: express.Response) => {
      this.logon(req, res)
    })

    router.get(query, (req: express.Request, res: express.Response) => {
      const headers = req.headers
      const body: IFixmlRequest = req.body
      const t: MsgTransport = this.keys.get(headers.authorization)
      if (!t) {
        this.logger.info(`received request with no token`)
        res.send({
          error: 'no key with query'
        })
      } else {
        const d = t.duplex
        this.respond(d, res)
        d.readable.push(body.fixml)
      }
    })
  }
}
