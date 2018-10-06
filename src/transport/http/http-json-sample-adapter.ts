import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { IHtmlOptions, IHtmlRoute, IHttpAdapter } from '../session-description'
import { HttpTransaction } from './http-transaction'
import { Dictionary } from '../../collections/dictionary'

export class HttpJsonSampleAdapter implements IHttpAdapter {
  private logger: IJsFixLogger
  private queue: HttpTransaction[] = []
  private token: string = null
  private routes: Dictionary<IHtmlRoute> = new Dictionary()
  constructor (public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('http.adapter')
    const routes = this.routes
    const options = config.description.application.http.options
    if (!options) {
      return
    }
    options.forEach((o: IHtmlRoute) => {
      routes.addUpdate(o.name, o)
    })
    this.logger.info(`instance created routes ${routes.count()}`)
  }

  public getOptions (data: Buffer): IHtmlOptions {
    const q = this.queue
    if (q.length === 0) {
      return null
    }
    const next: HttpTransaction = q.shift()
    const options = next.options
    options.body = {
      fixml: data.toString()
    }
    this.logger.info(`${next.msgType}: ${next.options.method} ${next.options.uri} ${data.length}`)
    return options
  }

  endMessage (m: any): Buffer {
    // grab token if not yet received
    if (!this.token) {
      const headers = m.headers
      this.token = headers.authorization
      this.logger.info(`receive token ${this.token}`)
    }
    return m.body
  }

  beginMessage (msgType: string): void {
    // build options based on type
    const routes = this.routes
    const route = routes.get(msgType) || routes.get('default')
    const options = {
      method: route.value.method,
      uri: route.value.uri,
      json: route.value.json,
      resolveWithFullResponse: route.value.resolveWithFullResponse,
      headers: route.value.headers
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
