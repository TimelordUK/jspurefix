import { HttpDuplex } from './http-duplex'
import * as requestPromise from 'request-promise'

export class HttpJsonDuplex extends HttpDuplex {
  constructor (public uri: string) {
    super()
  }
  protected getOptions (data: Buffer): requestPromise.OptionsWithUri {
    return {
      method: 'POST',
      uri: this.uri,
      body: {
        fixml: data.toString()
      },
      json: true
    } as requestPromise.OptionsWithUri
  }
}
