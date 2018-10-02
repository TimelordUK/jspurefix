import { IncomingMessage } from 'http'
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

  endMessage (m: IncomingMessage): void {
    // grab token if not yet received
    if (!this.token) {
      const headers = m.headers
      this.token = headers.authorization
      this.logger.info(`receive token ${this.token}`)
    }
  }

  beginMessage (msgType: string): void {
    // build options based on type
    const options = {
      method: 'POST',
      uri: this.config.description.application.http.uri,
      json: true,
      resolveWithFullResponse: true
    } as requestPromise.OptionsWithUri
    this.queue.push(new HttpTransaction(msgType, options))
  }
}
