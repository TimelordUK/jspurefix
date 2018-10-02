import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { IHttpAdapter } from '../session-description'
import { HttpTransaction } from './http-transaction'
import * as requestPromise from 'request-promise'

export class HttpJsonSampleAdapter implements IHttpAdapter {
  private logger: IJsFixLogger
  private queue: HttpTransaction[] = []
  private token: string = null
  constructor (public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('http.adapter')
    this.logger.info('instance created')
  }

  public getOptions (data: Buffer): requestPromise.OptionsWithUri {
    const q = this.queue
    if (q.length === 0) {
      return null
    }
    const next: HttpTransaction = q.shift()
    const options = next.options
    options.body = {
      fixml: data.toString()
    }
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
    const uri = this.config.description.application.http.uri
    if (!this.token) {
      this.logger.info(`assume POST to fetch token on ${uri}`)
      const options = {
        method: 'POST',
        uri: uri,
        json: true,
        resolveWithFullResponse: true
      } as requestPromise.OptionsWithUri
      this.queue.push(new HttpTransaction(msgType, options))
    }
  }
}
