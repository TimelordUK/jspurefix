import { MsgTransport } from '../factory'
import { FixAcceptor } from '../fix-acceptor'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { IFixmlRequest } from '../fixml'
import { FixDuplex, StringDuplex, StringDuplexTraits } from '../duplex'

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as http from 'http'
import { v4 as uuidv4 } from 'uuid'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

@injectable()
export class HttpAcceptor extends FixAcceptor {
  private readonly app: express.Express = express()
  private server: http.Server
  private readonly logger: IJsFixLogger
  private readonly router: express.Router
  private nextId: number = 0
  private readonly keys: Map<string, MsgTransport> = new Map<string, MsgTransport>()

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config?.description?.application ?? null)
    this.logger = config.logFactory.logger(`${config?.description?.application?.name}:HttpAcceptor`)
    this.logger.info('creating http server')
    this.router = express.Router()
    this.router.use(bodyParser.json())
    this.subscribe()
    this.app.use('/', this.router)
  }

  public listen (): void {
    const app = this.config.description.application
    const port = app?.http?.port ?? 0
    const logger = this.logger
    logger.info(`start to listen ${port}`)
    this.server = this.app.listen(port, () => {
      logger.info(`app listening at http://localhost:${port}${app?.http?.uri}`)
    })
    this.server.on('error', (err: Error) => {
      logger.error(err)
      this.emit('error', err)
    })
  }

  public close (callback?: (err?: Error) => void): void {
    const app = this.config.description.application
    const port = app?.http?.port
    this.logger.info(`close listener on port ${port}`)
    this.server.close(callback)
  }

  private saveTransport (tid: number, transport: MsgTransport): string {
    this.transports[tid] = transport
    const keys: string[] = Object.keys(this.transports)
    const a = uuidv4()
    this.keys.set(a, transport)
    this.logger.info(`new transport id = ${tid} token = ${a} created total transports = ${keys.length}`)
    this.emit('transport', transport)
    return a
  }

  private harvestTransport (token: string, tid: number): void {
    delete this.transports[tid]
    this.keys.delete(token)
    const keys: string[] = Object.keys(this.transports)
    this.logger.info(`transport ${tid} ends total transports = ${keys.length}`)
  }

  private async respond (duplex: FixDuplex, response: express.Response, token: string | null = null): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      response.setHeader('Content-Type', 'application/json')
      const timer = setTimeout(() => {
        const businessReject = '<FIXML><BizMsgRej BizRejRsn="4" Txt="no response from application"/></FIXML>'
        const b = Buffer.from(businessReject, 'utf-8')
        duplex.writable.removeListener('data', transmit)
        response.send(b)
        reject(new Error('no response'))
      }, 5000)

      const transmit = (d: Buffer): void => {
        this.logger.info('responding to request')
        clearTimeout(timer)
        if (token) {
          response.setHeader('authorization', token)
        }
        duplex.writable.removeListener('data', transmit)
        response.send(d)
        resolve(true)
      }

      duplex.writable.on('data', transmit)
    })
  }

  private async logon (req: express.Request, res: express.Response): Promise<void> {
    const body: IFixmlRequest = req.body
    const id = this.nextId++
    this.logger.info(JSON.stringify(body, null, 4))
    // check hand back session key
    const d = new StringDuplex('', StringDuplexTraits.None)
    const transport = new MsgTransport(id, this.config, d)
    const token = this.saveTransport(id, transport)
    this.respond(d, res, token).then(() => {
      this.logger.info('responded to logon')
    }).catch((e: Error) => {
      this.logger.error(e)
    })
    d.readable.push(body.fixml)
  }

  private async logout (req: express.Request, res: express.Response): Promise<void> {
    const headers = req.headers
    const body: IFixmlRequest = req.body
    const t: MsgTransport | undefined = this.keys.get(headers?.authorization ?? '')
    if (t) {
      const token = req.headers.authorization
      if (token) {
        this.harvestTransport(token, t.id)
        const d = t.duplex
        this.respond(d, res, token).then(() => {
          this.logger.info('responded to logout')
          t.end()
        }).catch((e: Error) => {
          this.logger.error(e)
        })
        d.readable.push(body.fixml)
      }
    }
  }

  private subscribe (): void {
    const router = this.router
    const app = this.config.description.application
    const root = app?.http?.uri
    const authorise = `${root}authorise`
    const query = `${root}query`
    this.logger.info(`uri: authorise ${authorise}, query ${query}`)
    router.post(authorise, async (req: express.Request, res: express.Response) => {
      if (!req.headers.authorization) {
        this.logger.info('logon')
        await this.logon(req, res)
      } else {
        this.logger.info('logout')
        await this.logout(req, res)
      }
    })

    router.get(query, async (req: express.Request, res: express.Response) => {
      const headers = req.headers
      const body: IFixmlRequest = req.body
      const t: MsgTransport | null = this.keys.get(headers.authorization ?? '') ?? null
      if (!t) {
        this.logger.info('received request with no token')
        res.send({
          error: 'no key with query'
        })
      } else {
        const d = t.duplex
        this.respond(d, res).then(() => {
          this.logger.info(`responded to ${req.url}`)
        }).catch(e => {
          res.send(e)
        })
        d.readable.push(body.fixml)
      }
    })
  }
}
