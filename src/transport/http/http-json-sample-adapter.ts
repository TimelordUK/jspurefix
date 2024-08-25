import { IJsFixConfig, IJsFixLogger } from '../../config'
import { HttpTransaction } from './http-transaction'
import { IHttpAdapter } from './http-adapter'
import { IHtmlRoute } from './html-route'
import { IHtmlOptions } from './html-options'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

@injectable()
export class HttpJsonSampleAdapter implements IHttpAdapter {
  private readonly logger: IJsFixLogger
  private readonly queue: HttpTransaction[] = []
  private token: string | null = null
  private readonly routes: Map<string, IHtmlRoute> = new Map<string, IHtmlRoute>()
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('http.adapter')
    const routes = this.routes
    const options = config?.description?.application?.http?.options
    if (!options) {
      return
    }
    options.forEach((o: IHtmlRoute) => {
      routes.set(o.name, o)
    })
    this.logger.info(`instance created routes ${routes.size}`)
  }

  public getOptions (data: Buffer): IHtmlOptions | null {
    const q = this.queue
    if (q.length === 0) {
      return null
    }
    const next: HttpTransaction | null = q.shift() ?? null
    if (next == null) return null
    const options = next.options
    options.data = {
      fixml: data.toString()
    }
    this.logger.info(`${next.msgType}: ${next.options.method} ${next.options.url} ${data.length}`)
    return options
  }

  endMessage (m: any): Buffer {
    // grab token if not yet received
    if (!this.token) {
      const headers = m.headers
      this.token = headers.authorization
      this.logger.info(`receive token ${this.token}`)
    }
    return m.data
  }

  beginMessage (msgType: string): void {
    // build options based on type
    const routes = this.routes
    const route = routes.get(msgType) ?? routes.get('default')
    const options = {
      method: route?.value.method,
      url: route?.value.url,
      json: route?.value.json,
      resolveWithFullResponse: route?.value.resolveWithFullResponse,
      headers: route?.value.headers
    } as IHtmlOptions
    const headers = options.headers
    if (headers) {
      if (this.token) {
        headers.authorization = this.token
      } else if (msgType === 'UserReq') {
        delete headers.authorization
      }
    }
    this.queue.push(new HttpTransaction(msgType, options))
  }
}
