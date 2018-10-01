import { IHttpAdapter } from './http-duplex'
import { IncomingMessage } from 'http'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import * as requestPromise from 'request-promise'

export class HttpJsonAdapter implements IHttpAdapter {
  private logger: IJsFixLogger
  constructor (public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('acceptor')
  }
  public getOptions (data: Buffer): requestPromise.OptionsWithUri {
    return {
      method: 'POST',
      uri: this.config.description.application.http.uri,
      body: {
        fixml: data.toString()
      },
      json: true,
      resolveWithFullResponse: true
    } as requestPromise.OptionsWithUri
  }

  onMessage (m: IncomingMessage): void {
    //
    let x = 0
  }
}
